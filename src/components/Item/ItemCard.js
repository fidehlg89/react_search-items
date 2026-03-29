import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAsync } from "../../redux/actions/asyncActions/cartAsync";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  if (!item) return null;

  const handleAddToCart = () => {
    dispatch(addToCartAsync(item));
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={item.image.startsWith('http') ? item.image : `https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000`}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000";
          }}
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900 rounded-full shadow-sm">
            ${item.price}
          </span>
        </div>
        {item.inStock < 10 && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
              Only {item.inStock} left
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
          {item.category || "General"}
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight group-hover:text-indigo-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-slate-500 mb-6 line-clamp-2">
          Premium quality guaranteed with ergonomic design and latest technology.
        </p>
        
        <div className="mt-auto">
          <button
            onClick={handleAddToCart}
            className="w-full py-3 px-4 bg-slate-900 text-white rounded-2xl font-semibold text-sm hover:bg-indigo-600 shadow-md hover:shadow-indigo-200 transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

