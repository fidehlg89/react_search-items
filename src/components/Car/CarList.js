import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCarAsync,
  deleteItemfromCarAsync,
} from "../../redux/actions/asyncActions/carAsync";
import CarItem from "./CarItem";

const CarList = ({ carlist, carData, deleteItem }) => {
  useEffect(() => {
    carData();
  }, [carData]);

  return (
    <>
      {carlist != null && carlist.length > 0
        ? carlist.map((element, index) => (
            <CarItem key={index} item={element} onDelete={deleteItem} />
          ))
        : null}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("Car list state", state);
  return {
    carlist: state.car.list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  carData: () => dispatch(getCarAsync()),
  deleteItem: (id) => dispatch(deleteItemfromCarAsync(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
