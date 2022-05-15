import StockAPI from '@mobile/repositories/stock';
import { Dispatch } from 'redux';
import { LOAD_PRODUCTS } from '../actionsType';
import { startLoading, stopLoading } from '../Loading/action';

export const listStock = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await StockAPI.listStock();
    dispatch({ type: LOAD_PRODUCTS , payload});
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(stopLoading());
  }
};

export const updateStock = (id: string, amount: number) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await StockAPI.updateStock(id, amount);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(stopLoading());
  }
};
