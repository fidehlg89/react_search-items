import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = () => {
  return (
    <div className="flex border border-gray-300 rounded-lg shadow-lg">
      <Decrement />
        <div className="p-1 bg-gray-100">{20}</div>
      <Increment />
    </div>
  );
};

export default Counter;
