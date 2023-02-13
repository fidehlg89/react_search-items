import { GET_ITEMS } from "./actionTypes";

export const getItems = (data) => {
  console.log('Items List Action',data)
  return {
    type: GET_ITEMS,
    payload: {
      data,
    },
  };
};
