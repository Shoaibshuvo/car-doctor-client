import React, { useEffect, useState } from "react";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="space-y-4 text-center mb-10">
        <h3 className="text-[#FF3811] font-bold text-xl">Popular Products</h3>
        <h2 className="text-3xl font-bold">Browse Our Products</h2>
        <p className="">
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomised <br /> Words Which Do Not Look Event Slightly
          Believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {products.map((product) => (
          <PopularProductCard
            key={product.id}
            product={product}
          ></PopularProductCard>
        ))}
      </div>
      <div className="text-center mb-10">
        <button className="btn btn-outline text-[#FF3811]">More Products</button>
      </div>
    </>
  );
};

export default PopularProducts;
