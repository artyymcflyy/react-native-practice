import * as types from '../actions/types'
import initialState from './initialState';

export default function usersReducer(state = initialState.users, action) {
    switch (action.type) {
        case types.FETCH_USERS_SUCCESS:
            return {
                ...state,
                lastMonthsUsers: action.users
            };
        default:
            return state;
    }
}