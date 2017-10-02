import * as types from '../actions/types'
import initialState from './initialState';

export default function monthReducer( state = initialState.month, action) {
    switch (action.type) {
        case types.FETCH_MONTH_SUCCESS:
            return {
                ...state,
                currentMonth: action.month
            };
        default:
            return state;
    }
}