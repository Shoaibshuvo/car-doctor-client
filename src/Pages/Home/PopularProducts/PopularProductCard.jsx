import React from "react";

const PopularProductCard = ({ product }) => {
  const { photo, name, price, ratings} = product;
  return (
    <>
      <div className="card w-96  shadow-xl">
        <figure className="px-10  pt-10">
          <img
            src={photo}
            alt="Product"
            className="rounded-xl bg-base-200"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{ratings}</h2>
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-[#FF3811]  text-xl font-bold">${price}</p>
          
        </div>
      </div>
    </>
  );
};

export default PopularProductCard;
