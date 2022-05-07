import { useState, useEffect } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Apple",
    price: 1,
  },
  {
    id: 2,
    name: "Book",
    price: 5,
  },
  {
    id: 3,
    name: "Banana",
    price: 0.5,
  },
  {
    id: 4,
    name: "Table",
    price: 200,
  },
];

const App = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (result.length===0) {
      search();
    }
  });

  const inputHandler = (event) => {
    setQuery(event.target.value);
  };

  const search = () => {
    const foundItems = products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResult(foundItems);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <input
          value={query}
          onChange={inputHandler}
          placeholder="Search products"
          className="input"
        />

        <button onClick={search}>Search</button>
      </div>

      {/* Display search result */}
      <div className="search-result">
        {result && result.length > 0 ? (
          result.map((item) => (
            <li key={item.id} className="item">
              <span className="item-id">{item.id}</span>
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}$</span>
            </li>
          ))
        ) : (
          <h2>No items found!</h2>
        )}
      </div>
    </div>
  );
};

export default App;
