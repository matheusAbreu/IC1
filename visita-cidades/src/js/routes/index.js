import React from "react";

import Home from "../pages/home/";

import History from './history';

import { ConnectedRouter } from "connected-react-router";
import { Route, Switch} from "react-router-dom";

const Routes = () => (
  <ConnectedRouter history={History} > 
      <div className={'col-12'}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </div>
  </ConnectedRouter>
);

export default Routes;

/**
 *    <div className={'container'} style={{width:'100%'}}>
        <Header title={'Uxp'}/>
 */