const CartItem = ({ item, onDelete }) => {
  return (
    <div className="flex items-center gap-6 p-4 bg-white rounded-3xl border border-slate-100 mb-4 hover:shadow-md transition-shadow">
      <div className="flex-none w-24 h-24 rounded-2xl overflow-hidden bg-slate-100">
        <img
          src={item.image.startsWith('http') ? item.image : `https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000`}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000";
          }}
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-lg font-bold text-slate-800">{item.name}</h4>
          <span className="text-lg font-bold text-indigo-600">${item.price}</span>
        </div>
        <p className="text-sm text-slate-500 mb-4">Quantity: 1 • Free Shipping</p>
        
        <button
          onClick={() => onDelete(item.id)}
          className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors flex items-center space-x-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span>Remove Item</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

