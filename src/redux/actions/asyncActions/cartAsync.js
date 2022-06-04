import axiosAPI from "../../../service/api";
import { getCartList } from "../cartActions";

export const getCartAsync = () => async (dispatch) => {
  try {
    const res = await axiosAPI.get("cart");
    const list = res.data;
    dispatch(getCartList(list));
  } catch (err) {
    console.log(err);
  }
};

export const deleteItemfromCartAsync = (id) => async (dispatch) => {
  try {
    await axiosAPI.delete(`cart/${id}`);
    dispatch(getCartAsync())
  } catch (err) {
    console.log(err);
  }
};
