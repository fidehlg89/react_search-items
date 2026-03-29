import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinkClass = (path) => 
    `flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 ${
      location.pathname === path 
        ? "text-indigo-600 bg-indigo-50 font-semibold" 
        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
    }`;

  return (
    <nav className="flex justify-between items-center h-20">
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 118 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            TechStore
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className={navLinkClass("/")}>
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/car" className={navLinkClass("/car")}>
          <div className="relative p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span className="hidden sm:inline">My Cart</span>
        </Link>
        
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        
        <button className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 transition-colors">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
