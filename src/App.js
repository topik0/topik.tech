import React from "react";
import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";

import {
  GlobalStyles
} from "./styles";
import Home from './views/Home/index.js';
import About from './views/About/index.js';

const Routes = () => (
   <React.Fragment>
      <Reset />
      <GlobalStyles />
         <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={About} path="/about"/>
         </Switch>
    </React.Fragment>
)

export default Routes;