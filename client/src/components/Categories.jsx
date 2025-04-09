import React, { useContext } from "react";
import { categories } from "../assets/assets";
import { AppContext } from "../contexts/AppContext";

function Categories() {
  const { navigate } = useContext(AppContext);
  return (
    <div className="mt-10">
      <p className="text-2xl md:text-3xl font-medium ">Categories</p>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
      lg:grid-cols-5 xl:grid-cols-7 mt-6 gap-6 text-nowrap"
      >
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="group cursor-pointer py-5 px-3 gap-4 rounded-lg flex flex-col justify-center items-center "
              onClick={() => {
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0, 0);
              }}
            >
              <img
                src={category.image}
                alt={category.text}
                className="group-hover:scale-108 transition max-w-35 object-contain rounded-lg"
              />
              <p className="text-md font-medium">{category.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
