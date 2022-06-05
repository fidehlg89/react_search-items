import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Navbar />
      <main>
        <div className="max-w-2xl mx-auto py-2 px-4 sm:py-3 sm:px-3 lg:max-w-7xl lg:px-4">
          {children}
        </div>
      </main>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default DefaultLayout;
