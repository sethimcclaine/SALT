import ACTION_TYPES from './action-types';
import api from 'src/utils/api';

export const setOverviewState = () => (dispatch, getState) => {
    //const { appReducer } = getState();

    return api.getOverview(/*appReducer*/)
        .then((payload) => {
            dispatch({ type: ACTION_TYPES.SET_OVERVIEW_STATE, payload });
        })
        .catch(() => {
            dispatch({ type: ACTION_TYPES.GET_OVERVIEW_API_FAIL});
        });
};


export const setMoreInfoState = () => (dispatch, getState) => {
    //const { appReducer } = getState();

    return api.getMoreInfo(/*appReducer*/)
        .then((payload) => {
            dispatch({ type: ACTION_TYPES.SET_MORE_INFO_STATE, payload });
        })
        .catch(() => {
            dispatch({ type: ACTION_TYPES.GET_MORE_INFO_API_FAIL});
        });
};
