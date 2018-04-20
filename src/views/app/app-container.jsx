import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCoinList, setBitCoin } from 'src/actions/app-action-creators';

import App from './app';
//import { setAppState } from 'src/actions/app-action-creators';


const mapStateToProps = ({ appReducer }) => ({
      appReducer,
      //spinnerMessage: appReducer.get('spinnerMessage'),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
      setCoinList,
      setBitCoin,
  }, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
