import { combineReducers } from 'redux';
import trips from './TripsReducer';
import users from './UsersReducer';
import month from './MonthReducer';

const rootReducer = combineReducers({
    month,
    trips,
    users,
});

export default rootReducer;