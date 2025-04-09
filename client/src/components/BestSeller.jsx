import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../contexts/AppContext";

function BestSeller() {
  const { products } = useContext(AppContext);
  return (
    <div className="mt-10">
      <p className="text-2xl font-bold">Best Seller</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
}

export default BestSeller;
