import axiosAPI from "../../../service/api";
import { getCarList } from "../carActions";

export const getCarAsync = () => async (dispatch) => {
  try {
    const res = await axiosAPI.get("car");
    const list = res.data;
    dispatch(getCarList(list));
  } catch (err) {
    console.log(err);
  }
};

export const deleteItemfromCarAsync = (id) => async (dispatch) => {
  try {
    await axiosAPI.delete(`car/${id}`);
    dispatch(getCarAsync())
  } catch (err) {
    console.log(err);
  }
};
