import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Overview from './overview';
import {
  setSelectedCoins,
} from 'src/actions/app-action-creators';

const mapStateToProps = (appReducer) => {
    return {
        appReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSelectedCoins,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
