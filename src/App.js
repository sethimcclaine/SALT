import './App.css';

import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';

import { PATH } from 'src/constants';
import { history } from 'src/utils/history';

import { getCoinList } from 'src/utils/api';

import NavBar from 'src/components/nav-bar';
import Overview from 'src/views/overview';
import MoreInfo from 'src/views/more-info';
//PrintFection
import Img from 'src/views/img/index';

class App extends Component {
  /*
    constructor() {
      super();
      this.state = {
        coinList: null,
      }
    }
    componentWillMount() {
      getCoinList().then((data) => {
        this.setState({
          coinList: data,
        });
      })
    }
    */
  render() {
    return (
      <div className="App">
        <Router history={ history } >
          <div className="router">
            <Route path={ PATH.base } component={ NavBar }></Route>
            <Switch>
                <Route path={ PATH.overview } component={ Overview }></Route>
                <Route path={ PATH.more } component={ MoreInfo }></Route>
                <Route path={ PATH.img } component={ Img }></Route>
                <Redirect from={ PATH.base } to={ PATH.overview }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
