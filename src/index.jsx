import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'src/App';
import registerServiceWorker from 'src/registerServiceWorker';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import appReducer from 'src/reducers/app-reducer';

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
