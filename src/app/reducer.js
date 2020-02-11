import { combineReducers } from 'redux';
import tableReducer from '../features/Table/reducers';
import teamsReducer from '../features/Teams/reducers';
import teamReducer from '../features/Team/reducers';
import headerReducer from '../features/FootballHeader/reducers';

const rootReducer = combineReducers({
  header: headerReducer,
  table: tableReducer,
  teams: teamsReducer,
  team: teamReducer
});

export default rootReducer;
