import ACTION_TYPES from 'src/actions/action-types';
import {
  assoc,
  contains,
  append,
  remove,
  indexOf,
} from 'ramda';


const INITIAL_APP_STATE = {
    coinList: {},
    view: 'overview',
    selectedCoins: ['LTC', 'DOGE', 'XMR'],
    selectedCoin: 'BTC',
    bitCoin: 0,
};

const appReducer = (state = INITIAL_APP_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SET_APP_STATE:
          return payload;

        case ACTION_TYPES.SET_COIN_LIST:
          return assoc('coinList', payload.Data, state);

        case ACTION_TYPES.SET_SELECTED_COINS:
          const tmp =  assoc('selectedCoins',
            contains(payload, state.selectedCoins) ?
              remove(indexOf(payload, state.selectedCoins), 1, state.selectedCoins) :
              append(payload, state.selectedCoins),
            state);
            console.log(state.selectedCoins);
            console.log(tmp.selectedCoins);
            debugger;
            return tmp;

        case ACTION_TYPES.SET_BITCOIN:
          return assoc('bitCoin', payload.BTC.USD, state);

        case ACTION_TYPES.SET_VIEW:
          return assoc('view', payload, state);


        default:
            return state;
    }
};

export default appReducer;
