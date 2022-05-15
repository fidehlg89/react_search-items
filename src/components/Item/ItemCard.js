import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="shadow-lg rounded-lg">
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={require(`../../${item.image}`)}
            alt={item.name}
            className="w-full h-60 object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 px-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="/">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {item.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">In Stock: 50</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$ {item.price}</p>
        </div>
        <div className="mt-4 pb-4 px-4 flex justify-center">
          <button className="flex justify-between items-center text-white bg-indigo-700 py-2 px-4 rounded-lg">
            Add to car
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
