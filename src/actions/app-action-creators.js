import ACTION_TYPES from './action-types';
import { getCoinList } from 'src/utils/api';

export const setCoinList = () => {
    return function (dispatch, getState) {
        const { appReducer } = getState();

        return getCoinList(appReducer)
            .then((payload) => {
                dispatch({ type: ACTION_TYPES.SET_COIN_LIST, payload});
            })
            .catch(() => {
                dispatch({ type: ACTION_TYPES.ACTION_FAILED });
            });
    };
};
