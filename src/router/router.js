import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {hashHistory} from 'react-router';
import Bundle from './Bundle';
import "antd/dist/antd.css"

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import Main from '../pages/layouts/Main.js';
import Login from 'bundle-loader?lazy&name=counter!pages/Login/Login';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

const getRouter = () => (
    <Router  >
      <Switch>
          <Route exact path="/login" component={createComponent(Login)}/>

          <Main>
          <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route exact path="/page1" component={createComponent(Page1)}/>
            <Route exact path="/counter" component={createComponent(Counter)}/>
            <Route exact path="/userinfo" component={createComponent(UserInfo)}/>
            </Switch>
          </Main>

      </Switch>
    </Router>
);

export default getRouter;
