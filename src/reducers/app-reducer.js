import ACTION_TYPES from 'src/actions/action-types';
import {
  assoc,
  contains,
  append,
  remove,
  indexOf,
} from 'ramda';


const INITIAL_APP_STATE = {
    coinList: {}, // Used to populate coin-selector and give names for symbols
    view: 'overview', // Used for navigation
    selectedCoins: ['LTC', 'DOGE', 'XMR'], // Used for overview
    selectedCoin: 'BTC', //Used for more info
    bitCoin: 0, // Used for to hold current value of bitcoin
};

const appReducer = (state = INITIAL_APP_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SET_APP_STATE:
          return payload;

        case ACTION_TYPES.SET_COIN_LIST:
          return assoc('coinList', payload.Data, state);

        case ACTION_TYPES.SET_SELECTED_COINS:
          return assoc('selectedCoins',
            contains(payload, state.selectedCoins) ?
              remove(indexOf(payload, state.selectedCoins), 1, state.selectedCoins) :
              append(payload, state.selectedCoins),
            state);

        case ACTION_TYPES.SET_SELECTED_COIN:
            return assoc('selectedCoin', payload);

        case ACTION_TYPES.SET_BITCOIN:
          return assoc('bitCoin', payload.BTC.USD, state);

        case ACTION_TYPES.SET_VIEW:
          return assoc('view', payload, state);


        default:
            return state;
    }
};

export default appReducer;
