import { combineReducers } from 'redux';
import tableReducer from '../features/Table/reducers';
import teamsReducer from '../features/Teams/reducers';
import headerReducer from '../features/FootballHeader/reducers';

const rootReducer = combineReducers({
  header: headerReducer,
  table: tableReducer,
  teams: teamsReducer
});

export default rootReducer;
