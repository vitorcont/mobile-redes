import { combineReducers } from 'redux';
import loadingReducer from './Loading/reducer';
import stockReducer from './Stock/reducer';


const reducers = combineReducers({
  loading: loadingReducer,
  stock: stockReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
