import { GET_ITEMS } from "./actionTypes";

export const getItems = (data) => {
  return {
    type: GET_ITEMS,
    payload: {
      data,
    },
  };
};
