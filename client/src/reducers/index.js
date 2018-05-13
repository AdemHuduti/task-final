import { combineReducers } from 'redux';
import DataReducer from './data-reducer';
import DataReducerSCC from './data-reducer-SCC';
import DataReducerBBI from './data-reducer-BBI';

const rootReducer = combineReducers({
  myData: DataReducer,
  myDataSCC: DataReducerSCC,
  myDataBBI: DataReducerBBI
});

export default rootReducer;