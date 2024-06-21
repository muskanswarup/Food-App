import React, {useState} from "react";
import { data } from "../data/data.js";

function Food() {

    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };


  return (
    <div className="max-w-[1640px] px-4 py-12 m-auto">
      <h1 className="font-bold text-4xl text-orange-600 text-center">Top Rated Menus</h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="text-gray-700 font-bold">Filter Type</p>
          <div className="flex flex-wrap justify-between">
            <button onClick={() => setFoods(data)} className="text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600 m-1">All</button>
            <button onClick={() => {filterType('burger')}} className="text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600 m-1">Burgers</button>
            <button onClick={() => {filterType('pizza')}} className="text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600 m-1">Pizzas</button>
            <button onClick={() => {filterType('salad')}} className="text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600 m-1">Salads</button>
            <button onClick={() => {filterType('chicken')}} className="text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600 m-1">Chicken</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
            <p className="text-gray-700 font-bold">Filter Price</p>
            <div className="flex justify-between w-full max-w-[390px]">
                <button onClick={() => filterPrice('$')} className="text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600 m-1">$</button>
                <button onClick={() => filterPrice('$$')} className="text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600 m-1">$$</button>
                <button onClick={() => filterPrice('$$$')} className="text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600 m-1">$$$</button>
                <button onClick={() => filterPrice('$$$$')} className="text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600 m-1">$$$$</button>
            </div>
        </div>
      </div>

        {/* Display foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6">
            {foods.map((item, index) =>(
                <div key={index} className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
                    <img src={item.image} alt={item.name} className="w-full h-[200px] rounded-t-lg object-cover"/>
                    <div className="flex justify-between px-2 py-4">
                        <p className="font-bold">{item.name}</p>
                        <p className="bg-orange-500 text-white p-2 rounded-full"><span>{item.price}</span></p>
                    </div>
                </div>
            ) )}
        </div>

    </div>
  );
}

export default Food;
