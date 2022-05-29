import { GET_CAR } from "./actionTypes";

export const getCarList = (list) => {
  return {
    type: GET_CAR,
    payload: {
      list,
    },
  };
};


