import * as types from '../actions/types'
import initialState from './initialState';

export default function monthReducer( state = initialState.months, action) {
    switch (action.type) {
        case types.FETCH_MONTH_SUCCESS:
            return {
                ...state,
                month: action.month
            };
        default:
            return state;
    }
}