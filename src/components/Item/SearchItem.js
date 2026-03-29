import React from "react";

const Search = ({ query, onChange, onSearch, onReset }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-10 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
      <div className="flex-grow w-full relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for premium tech products..."
          className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-600 transition-all text-sm font-medium"
          onChange={onChange}
          name="query"
          value={query}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
        />
      </div>

      <div className="flex items-center space-x-3 w-full md:w-auto">
        <button
          className="flex-1 md:flex-none px-6 py-4 text-sm font-bold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all active:scale-95"
          onClick={onReset}
        >
          Reset
        </button>
        <button
          className="flex-1 md:flex-none px-8 py-4 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center space-x-2"
          onClick={onSearch}
        >
          <span>Explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;

