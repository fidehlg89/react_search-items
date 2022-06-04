import { GET_CART } from "./actionTypes";

export const getCartList = (list) => {
  return {
    type: GET_CART,
    payload: {
      list,
    },
  };
};


