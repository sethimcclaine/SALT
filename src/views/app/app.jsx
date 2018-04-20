import './app.css';

import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';

import { PATH } from 'src/constants';
import { history } from 'src/utils/history';

import NavBar from 'src/components/nav-bar';
import OverviewContainer from 'src/views/overview';
import MoreInfoContainer from 'src/views/more-info';
//PrintFection
import Img from 'src/views/img/index';

class App extends Component {
    componentWillMount() {
      this.props.setCoinList();
      this.props.setBitCoin();
    }
  render() {
    return (
      <div className="App">
        <Router history={ history } >
          <div className="router">
            <Route path={ PATH.base } component={ NavBar }></Route>
            <Switch>
                <Route path={ PATH.overview } component={ OverviewContainer }></Route>
                <Route path={ PATH.more } component={ MoreInfoContainer }></Route>
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
