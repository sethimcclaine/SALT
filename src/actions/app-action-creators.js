import ACTION_TYPES from './action-types';
import { getCoinList, getPriceMulti } from 'src/utils/api';

export const setCoinList = () => {
    return function (dispatch, getState) {
        return getCoinList()
            .then((payload) => {
                dispatch({ type: ACTION_TYPES.SET_COIN_LIST, payload});
            })
            .catch(() => {
                dispatch({ type: ACTION_TYPES.ACTION_FAILED });
            });
    };
};

export const setBitCoin = () => {
    return function (dispatch, getState) {
        return getPriceMulti(['BTC'])
            .then((payload) => {
                dispatch({ type: ACTION_TYPES.SET_BITCOIN, payload});
            })
            .catch(() => {
                dispatch({ type: ACTION_TYPES.ACTION_FAILED });
            });
    };
};

export const setSelectedCoin = (payload) => {
  return function(dispatch, getState) {
    dispatch({
      type: ACTION_TYPES.SET_SELECTED_COIN,
      payload,
    });
  };
};

export const setSelectedCoins = (payload) => {
  return function(dispatch, getState) {
    //const { appReducer } = getState();
    dispatch({
      type: ACTION_TYPES.SET_SELECTED_COINS,
      payload,
    });
  };
};
