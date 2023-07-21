import React from "react";
import { FaClock, FaHeadphones, FaPeopleGroup, FaSquareCheck, FaWrench } from "react-icons/fa6";

const Features = () => {
  return (
    <>
      <div className="my-10">
        <div className="space-y-4 text-center mb-10">
          <h3 className="text-[#FF3811] font-bold text-xl">Team</h3>
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="">
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomised <br /> Words Which Do Not Look Event Slightly
            Believable.
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center ">
            <div className="p-4 flex flex-col items-center ">
                <FaPeopleGroup className="text-4xl text-[#FF3811]"></FaPeopleGroup>
                <p className="font-bold">
                Expert Team
                </p>
            </div>
            <div className="bg-[#FF3811] p-4 flex flex-col items-center rounded-xl">
                <FaClock className="text-4xl text-white" ></FaClock>
                <p className="font-bold">
                Timely Delivery
                </p>
            </div>
            <div className=" p-4 flex flex-col items-center">
                <FaWrench className="text-4xl text-[#FF3811]" ></FaWrench>
                <p className="font-bold">
                Best Equipment
                </p>
            </div>
            <div className=" p-4 flex flex-col items-center">
                <FaHeadphones className="text-4xl text-[#FF3811]" ></FaHeadphones>
                <p className="font-bold">
                24/7 Support
                </p>
            </div>
            <div className=" p-4 flex flex-col items-center gap-4 ">
                <FaSquareCheck className="text-4xl text-[#FF3811] " ></FaSquareCheck>
                <p className="font-bold">
                100% Guranty
                </p>
            </div>
            

        </div>
        </div>
    </>
  );
};

export default Features;
