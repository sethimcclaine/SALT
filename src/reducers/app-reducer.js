import ACTION_TYPES from 'src/actions/action-types';
import { assoc } from 'ramda';


const INITIAL_APP_STATE = {
    coinList: ['test'],
    view: 'overview',
    selectedCoins: [],
};

const appReducer = (state = INITIAL_APP_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SET_APP_STATE:
          return payload;

        case ACTION_TYPES.SET_COIN_LIST:
          return assoc('coinList', payload.Data, state);

        case ACTION_TYPES.SET_VIEW:
          return assoc('view', payload, state);

        default:
            return state;
    }
};

export default appReducer;
