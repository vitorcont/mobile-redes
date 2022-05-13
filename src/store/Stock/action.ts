import { StorageItems } from '@mobile/enum/storage';
import AuthAPI from '@mobile/repositories/auth';
import StockAPI from '@mobile/repositories/stock';
import navigationService from '@mobile/services/navigation';
import StorageService from '@mobile/services/storage';
import { Dispatch } from 'redux';
import { AUTH_LOGIN, LOGOUT } from '../actionsType';
import { startLoading, stopLoading } from '../Loading/action';



export const authenticate =
  (userData: models.LoginRequest) => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const payload: models.LoginResponse = await AuthAPI.login(userData);
      if (payload) {
        dispatch({ type: AUTH_LOGIN, payload });
      }
      StorageService.setItem(StorageItems.ACCESS_TOKEN, payload.token);
      navigationService.reset({
        index: 0,
        routes: [{ name: 'Content' }],
      });
    } catch (err) {
      ///handleError
    } finally {
      dispatch(stopLoading());
    }
  };

export const recovery = (email: string) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await AuthAPI.recovery(email);
  } catch (err) {
    //handleError
  } finally {
    dispatch(stopLoading());
  }
};

export const listStock = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await StockAPI.listStock();
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(stopLoading());
  }
};

export const checkLogin = () => async (dispatch: any) => {
  dispatch(startLoading());
  //Check Login Method
  dispatch(stopLoading());
};

export const refreshToken = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  const payload = await AuthAPI.refresh();
  if (payload) {
    dispatch({ type: AUTH_LOGIN, payload });
  }
  dispatch(stopLoading());
};

export const logout = () => async (dispatch: Dispatch) => {
  navigationService.reset({
    index: 0,
    routes: [{ name: 'Start' }],
  });
  StorageService.removeItem(StorageItems.ACCESS_TOKEN);
  dispatch({ type: LOGOUT });
};