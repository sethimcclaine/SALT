//import ACTION_TYPES from 'src/actions/action-types';

const INITIAL_APP_STATE = {
    coinlist: ['test'],
};

const appReducer = (state = INITIAL_APP_STATE, { type, payload }) => {
    switch (type) {
        //case ACTION_TYPES.SET_APP_STATE:
        case 'SET_APP_STATE':
            return payload;

        default:
            return state;
    }
};

export default appReducer;
