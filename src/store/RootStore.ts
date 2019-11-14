import { MainStore } from "./Main/MainStore";
import DB from "../Utils/Storage";

export class RootStore {
  mainStore: MainStore;

  constructor() {
    this.mainStore = new MainStore();

    DB.init().then(() => {
      this.mainStore.selectVehicleType("carros");
    });
  }
}
