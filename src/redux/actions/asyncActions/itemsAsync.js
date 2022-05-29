import axiosAPI from "../../../service/api";
import { getItems } from "../itemActions";

// get Students list async
export const getItemsAsync = () => async (dispatch) => {
  try {
    const res = await axiosAPI.get("products");
    const data = res.data;
    console.log('CarAsync',data)
    dispatch(getItems(data));
  } catch (err) {
    console.log(err);
  }
};




