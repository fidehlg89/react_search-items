import axiosAPI from "../../../service/api";
import { getCartList } from "../cartActions";
import { toast } from "react-toastify";

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

    toast.success("Item deleted succecfuly", {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch(getCartAsync());
  } catch (err) {
    console.log(err);
  }
};
