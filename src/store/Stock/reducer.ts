import { LOAD_PRODUCTS } from '../actionsType';

export const initialState: reducers.StockState = {
  products: []
};

export const stockReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default stockReducer;
