import { GET_CART } from "../actions/actionTypes";

const initialState = {
  item: null,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      const { list } = action.payload;
      return {
        ...state,
        list,
      };
    default:
      return state;
  }
}
