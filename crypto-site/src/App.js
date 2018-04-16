import './App.css';

import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';

import { PATH } from './constants';
import { history } from './utils/history';

import NavBar from './components/nav-bar';
import List from './views/list';
import MoreInfo from './views/more-info';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={ history } >
          <div className="router">
            <Route path={ PATH.base } component={ NavBar }></Route>
            <Switch>
                <Route path={ PATH.list } component={ List }></Route>
                <Route path={ PATH.more } component={ MoreInfo }></Route>
                <Redirect from={ PATH.base } to={ PATH.list }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
