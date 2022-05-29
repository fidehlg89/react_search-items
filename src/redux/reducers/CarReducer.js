import { GET_CAR } from "../actions/actionTypes";

const initialState = {
  item: null,
};

export default function common(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case GET_CAR:
      const { list } = action.payload;
      return {
        ...state,
        list,
      };
    default:
      return state;
  }
}
