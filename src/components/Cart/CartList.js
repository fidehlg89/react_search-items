import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCartAsync,
  deleteItemfromCartAsync,
} from "../../redux/actions/asyncActions/cartAsync";
import CartItem from "./CarItem";

const CartList = ({ cartlist, cartData, deleteItem }) => {
  useEffect(() => {
    cartData();
  }, [cartData]);

  return (
    <>
      {cartlist != null && cartlist.length > 0
        ? cartlist.map((element, index) => (
            <CartItem key={index} item={element} onDelete={deleteItem} />
          ))
        : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartlist: state.cart.list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  cartData: () => dispatch(getCartAsync()),
  deleteItem: (id) => dispatch(deleteItemfromCartAsync(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
