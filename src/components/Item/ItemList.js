import React, { useState, useEffect } from "react";
import { Item, NoItems, SearchItem } from "../";
import { connect } from "react-redux";
import { getItemsAsync } from "../../redux/actions/asyncActions/itemsAsync";

const ItemList = ({ items, itemsData }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    itemsData();
  }, [itemsData]);

  useEffect(() => {
    setResults(items);
  }, [setResults, items]);

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const onSearch = () => {
    const foundItems = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(foundItems);
  };

  const onReset = () => {
    setQuery("");
    setResults(items);
  };

  return (
      <>
        <SearchItem
          query={query}
          onChange={onChangeHandler}
          onSearch={onSearch}
          onReset={onReset}
        />
        {
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {results != null && results.length > 0 ? (
              results.map((item) => <Item key={item.id} data={item} />)
            ) : (
              <NoItems />
            )}
          </div>
        }
      </>
  );
};

const mapStateToProps = (state) => {
  console.log('Items list state', state)
  return {
    items: state.items.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  itemsData: () => dispatch(getItemsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
