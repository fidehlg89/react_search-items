import axiosAPI from "../../../service/api";
import { getItems } from "../itemActions";
import { toast } from "react-toastify";

// get Students list async
export const getItemsAsync = () => async (dispatch) => {
  try {
    const res = await axiosAPI.get("products");
    const data = res.data;
    if (res.status === 200) {
      toast.info("Items loadded succecfuly", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    dispatch(getItems(data));
  } catch (err) {
    toast.error(err);
  }
};
