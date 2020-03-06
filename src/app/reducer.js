import { combineReducers } from 'redux';
import tableReducer from '../features/Table/reducers';
import teamsReducer from '../features/Teams/reducers';
import teamReducer from '../features/Team/reducers';
import signUpReducer from '../features/Signup/reducers';
import signInReducer from '../features/SignIn/reducers';

const rootReducer = combineReducers({
  table: tableReducer,
  teams: teamsReducer,
  team: teamReducer,
  signup: signUpReducer,
  signin: signInReducer
});

export default rootReducer;
