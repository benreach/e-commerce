import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useContext(AppContext);
  const [filterdProducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilterdProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilterdProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end uppercase w-max">
        <p className="text-2xl font-medium uppercase">All products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filterdProducts
          .filter((product) => product.inStock)
          .map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
      </div>
    </div>
  );
};

export default AllProducts;
