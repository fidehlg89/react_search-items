import React, { useState, useEffect } from "react";
import { Item, NoItems, SearchItem } from "../";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3004/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const onSearch = () => {
    const foundItems = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResult(foundItems);
  };

  const onReset = () => {
    setQuery("");
    setResult([]);
  };

  return (
    <div className="container">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-3 lg:max-w-7xl lg:px-4">
        <SearchItem
          query={query}
          onChange={onChangeHandler}
          onSearch={onSearch}
          onReset={onReset}
        />
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Available items
        </h2>
        {
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {result && result.length > 0 ? (
              result.map((item) => <Item key={item.id} data={item} />)
            ) : (
              <NoItems />
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default ItemList;
