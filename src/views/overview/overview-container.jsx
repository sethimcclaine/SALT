import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Overview from './overview';

const mapStateToProps = ({ appReducer }) => {

    return {
        appReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        //goToRoute,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
