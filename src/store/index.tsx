import { observer, inject } from "mobx-react";
import { RootStore } from "./RootStore";

// export {} from "";

export default new RootStore();

export function connect(component: any, stores: string[] = []) {
  if (stores.length === 0)
    throw new Error("Stores must have at least one store name.");

  return inject(...stores)(observer(component));
}
