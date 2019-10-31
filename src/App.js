import React from "react";
import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";

import {
  GlobalStyles
} from "./styles";
import Home from './views/Home/index.js';
import About from './views/About/index.js';

const Routes = () => (
    <Switch>
      <Reset />
      <GlobalStyles />
      <Route component={Home} path="/" />
      <Route component={About} path="/about" />
    </Switch>
)

export default Routes;