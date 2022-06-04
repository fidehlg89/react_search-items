const CartItem = ({ item, onDelete }) => {
  return (
    <div className="flex font-sans rounded-md shadow-lg px-4 py-4">
      <div className="flex-none w-48 relative">
        <img
          src={require(`../../${item.image}`)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-auto p-3">
        <div className="flex flex-wrap">
          <h4 className="flex-auto text-lg font-semibold text-slate-900">
            {item.name}
          </h4>
          <div className="text-lg font-semibold text-slate-500">
            {`$${item.price}`}
          </div>
        </div>

        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button
              onClick={() => onDelete(item.id)}
              className="h-10 px-6 font-semibold rounded-md bg-red-600 text-white"
              type="submit"
            >
              Delete
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-700">
          Free shipping on all continental US orders.
        </p>
      </div>
    </div>
  );
};

export default CartItem;
