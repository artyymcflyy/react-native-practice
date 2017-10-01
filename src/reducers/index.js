import { combineReducers } from 'redux';
import trips from './TripsReducer';
import users from './UsersReducer';
import months from './MonthReducer';

const rootReducer = combineReducers({
    months,
    trips,
    users,
});

export default rootReducer;