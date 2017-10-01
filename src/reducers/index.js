import { combineReducers } from 'redux';
import trips from './TripsReducer';
import users from './UsersReducer';

const rootReducer = combineReducers({
    trips,
    users,
});

export default rootReducer;