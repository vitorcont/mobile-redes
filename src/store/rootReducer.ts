import { combineReducers } from 'redux';
import loadingReducer from './Loading/reducer';
import authReducer from './Stock/reducer';


const reducers = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
