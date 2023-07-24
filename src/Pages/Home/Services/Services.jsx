import React, { useEffect, useState } from "react";
import { FaCalendarDays, FaLocationDot, FaPhone } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="my-4 ">
        <div className="text-center">
          <h3 className="text-3xl text-[#FF3811] font-bold"> Our Services</h3>
          <h2 className="text-5xl">Our Service Area</h2>
          <p>
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomised <br /> Words Which Do Not Look Event Slightly
            Believable.{" "}
          </p>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="text-center my-6 ">
          <button className="btn btn-outline text-[#FF3811]">
            More Service
          </button>
        </div>
      </div>

      <div className="bg-black grid grid-cols-3 gap-4 px-12 py-20 rounded-xl my-10">
        <div className="flex items-center gap-4 text-white">
          <FaCalendarDays className="text-4xl"></FaCalendarDays>
          <div>
            <p>We are open monday-friday</p>
            <h4 className="text-3xl font-bold"> 7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <FaPhone className="text-4xl"></FaPhone>
          <div>
            <p>Have a question?</p>
            <h4 className="text-3xl font-bold"> +2546 251 2658</h4>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <FaLocationDot className="text-4xl"></FaLocationDot>
          <div>
            <p>Need a repair? our address</p>
            <h4 className="text-3xl font-bold"> Liza Street, New York</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
