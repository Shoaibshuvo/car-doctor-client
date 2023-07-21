import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
const TermCard = ({ term }) => {
  const { photo, id, engine, name } = term;

  return (
    <>
      
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{engine}</p>
    <div className="flex gap-2 justify-center items-center">
    <FaFacebook className="text-4xl text-blue-600"></FaFacebook>
    <FaTwitter className="text-4xl text-blue-400"></FaTwitter>
    <FaLinkedin className="text-4xl text-blue-600 rounded-xl"></FaLinkedin>
    <FaInstagram className="text-4xl text-orange-500"></FaInstagram>
     
    </div>
  </div>
</div>
        
    </>
  );
};

export default TermCard;
