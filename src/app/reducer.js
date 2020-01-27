import { combineReducers } from 'redux';
import reducer from '../features/FiltersWidget/reducers';

const rootReducer = combineReducers({
  filtersWidget: reducer
});

export default rootReducer;
