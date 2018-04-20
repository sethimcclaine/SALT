import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCoinList } from 'src/actions/app-action-creators';

import App from './app';
//import { setAppState } from 'src/actions/app-action-creators';


const mapStateToProps = ({ appReducer }) => ({
      appReducer,
      //spinnerMessage: appReducer.get('spinnerMessage'),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
      setCoinList,
  }, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
