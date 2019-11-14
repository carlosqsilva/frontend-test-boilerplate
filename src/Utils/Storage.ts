type Store = {
  name: string;
  key: string;
};

interface Config {
  name: string;
  store: Array<Store>;
  version?: number;
}

class Storage {
  DB_NAME: string;
  DB_STORE: Store[];
  VERSION: number;

  DB?: IDBDatabase;

  constructor(config: Config) {
    this.DB_NAME = config.name;
    this.DB_STORE = config.store;
    this.VERSION = config.version || 1;
  }

  init = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.VERSION);
      request.onerror = () => reject(request.error);

      request.onsuccess = event => {
        this.DB = request.result;
        resolve(event);
      };

      request.onupgradeneeded = event => {
        // @ts-ignore
        const db = event!.target!.result;
        const storeNames = db.objectStoreNames;

        for (const store of this.DB_STORE) {
          if (!storeNames.contains(store.name)) {
            db.createObjectStore(store.name, {
              keyPath: store.key
            });
          }
        }
      };
    });
  };

  save = (store: string, item: any) => {
    return new Promise((resolve, reject) => {
      const tx = this.DB!.transaction(store, "readwrite"),
        objectStore = tx.objectStore(store);

      tx.oncomplete = event => resolve(event);
      tx.onabort = event => reject(event);

      if (Array.isArray(item)) {
        item.forEach(item => {
          objectStore.add(item);
        });
      } else objectStore.add(item);
    });
  };

  delete = (store: string, keys: string | string[]) => {
    return new Promise((resolve, reject) => {
      const tx = this.DB!.transaction(store, "readwrite"),
        objectStore = tx.objectStore(store);

      tx.oncomplete = event => resolve(event);
      tx.onabort = event => reject(event);

      Array.prototype.concat([], keys).forEach(key => {
        objectStore.delete(key);
      });
    });
  };

  update = (store: string, obj: any) => {
    return new Promise((resolve, reject) => {
      const request = this.DB!.transaction(store, "readwrite")
        .objectStore(store)
        .put(obj);

      request.onsuccess = event => resolve(event);
      request.onerror = event => reject(event);
    });
  };

  getStore = (store: string) => {
    return new Promise((resolve, reject) => {
      const request = this.DB!.transaction(store)
        .objectStore(store)
        .getAll();

      // @ts-ignore
      request.onsuccess = ({ target }) => resolve(target.result);
      request.onerror = event => reject(event);
    });
  };

  get<T>(store: string, key: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      const request = this.DB!.transaction(store)
        .objectStore(store)
        .get(key);

      // @ts-ignore
      request.onsuccess = ({ target }) => resolve(target.result);
      request.onerror = event => reject(event);
    });
  }
}

const DB = new Storage({
  name: "fipe_api",
  store: [
    {
      name: "response",
      key: "url"
    }
  ]
});

export default DB;
