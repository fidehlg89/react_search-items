import { GET_ITEMS } from "../actions/actionTypes";

const initialState = {
  item: null,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
}
