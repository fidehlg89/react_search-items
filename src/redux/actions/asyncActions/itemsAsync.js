import axiosAPI from "../../../service/api";
import { getItems } from "../itemActions";
import { toast } from "react-toastify";
import { MOCK_PRODUCTS } from "../../../db/mockData";

// get items list async
export const getItemsAsync = () => async (dispatch) => {
  try {
    const res = await axiosAPI.get("products");
    const data = res.data;
    if (res.status === 200) {
      toast.info("Items loaded from API", {
        position: toast.POSITION.TOP_CENTER
      });
      dispatch(getItems(data));
    } else {
      throw new Error("Failed to load from API");
    }
  } catch (err) {
    console.error("API error, using mock data:", err);
    toast.warn("API unreachable. Using offline mock data.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000
    });
    dispatch(getItems(MOCK_PRODUCTS));
  }
};

