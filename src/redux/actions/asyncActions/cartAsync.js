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
export const addToCartAsync = (item) => async (dispatch) => {
  try {
    await axiosAPI.post("cart", {
      name: item.name,
      price: item.price,
      image: item.image,
      itemId: item.id
    });
    toast.success(`${item.name} added to cart!`, {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch(getCartAsync());
  } catch (err) {
    console.error("Failed to add to cart API:", err);
    // Even if API fails, we could potentially manage a local state, 
    // but for now let's just show an error toast.
    toast.error("Cart API failed. Functionality limited.");
  }
};
