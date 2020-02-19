import { combineReducers } from 'redux';
import tableReducer from '../features/Table/reducers';
import teamsReducer from '../features/Teams/reducers';
import teamReducer from '../features/Team/reducers';

const rootReducer = combineReducers({
  table: tableReducer,
  teams: teamsReducer,
  team: teamReducer
});

export default rootReducer;
