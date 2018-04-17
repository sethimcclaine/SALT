import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Overview from './overview';
/*
import { toggleModal } from 'src/actions/app-action-creators';
import {
    updateSkillInfoFromStore,
    revertToBackupSkill,
} from 'src/actions/skill-action-creators';
import { postPrivateDistState, cleanPrivateDistState } from 'src/actions/private-dist-action-creators';
import { goToRoute } from 'src/actions/app-action-creators';
*/

const mapStateToProps = (/*{ appReducer, skillInfoReducer, backupReducer, privateDistReducer }*/) => {
    //const { errors } = appReducer.toJS();

    return {
      /*
        errors,
        appReducer,
        locales: skillInfoReducer.get('locales'),
        prompt: backupReducer.get('prompt'),
        skillHasChanged: backupReducer.get('changed'),
        privDistHasChanged: privateDistReducer.get('changed'),
        */
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        //goToRoute,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
