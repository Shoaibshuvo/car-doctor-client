import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="mechanic" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="card-title text-2xl font-bold">{title}</h2>
              <p className="text-[#FF3811] text-xl font-semibold">
                Price: ${price}
              </p>
            </div>
            <div>
              <button className="btn btn-circle text-[#FF3811] hover:bg-[#FF3811] border-0 btn-outline">
                <FaArrowRightLong></FaArrowRightLong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
