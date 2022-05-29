import React from "react";

const ItemCard = ({ item }) => {

  const addToCar = (i) => {
    console.log(i);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: item.name,
        price: item.price,
        image: item.image,
        itemId: item.id
      }),
    };
    fetch("http://localhost:3004/car", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

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
        <div className="mt-4 px-4 flex justify-between relative">
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
          <button
            onClick={() => addToCar(item)}
            className="flex justify-between items-center text-sm text-white bg-indigo-700 py-2 px-4 rounded-lg uppercase"
          >
            Add to car
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
