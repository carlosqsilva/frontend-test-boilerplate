import React from "react";

import { Provider } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store";
import { Home } from "./pages";

export default () => (
  <BrowserRouter>
    <Provider {...store}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Provider>
  </BrowserRouter>
);
