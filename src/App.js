import './App.css';

import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';

import { PATH } from 'src/constants';
import { history } from 'src/utils/history';

import NavBar from 'src/components/nav-bar';
import List from 'src/views/list';
import MoreInfo from 'src/views/more-info';
//PrintFection
import Img from 'src/views/img'

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
                <Route path="/img" component={ Img }></Route>
                <Redirect from={ PATH.base } to={ PATH.list }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
