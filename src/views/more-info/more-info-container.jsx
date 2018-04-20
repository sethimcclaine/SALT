import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoreInfo from './more-info';
import {
  setSelectedCoin,
} from 'src/actions/app-action-creators';

const mapStateToProps = (appReducer) => {
    return {
        appReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSelectedCoin,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);
