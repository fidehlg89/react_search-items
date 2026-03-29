const NoItems = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-3xl border border-dashed border-slate-200">
    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
      <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">No products found</h3>
    <p className="text-slate-500 max-w-xs mx-auto">
      We couldn't find any items matching your search. Try different keywords or reset the filter.
    </p>
  </div>
);

export default NoItems;

