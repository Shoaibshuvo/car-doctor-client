import React, { useEffect, useState } from "react";
import TermCard from "./TermCard";

const Term = () => {
    const [terms, setTerms] = useState([]);
    useEffect(() => {
        fetch('/term.json')
        .then(res => res.json())
        .then(data => setTerms(data))
    }, [])
  return (
    <>
      <div className="space-y-4 text-center mb-10">
        <h3 className="text-[#FF3811] font-bold text-xl">Team</h3>
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="">
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomised <br /> Words Which Do Not Look Event Slightly
          Believable.
        </p>
      </div>
      <div>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {
            terms.map(term => <TermCard key={term.id} term={term}></TermCard>)
        }
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
   
  
</div>

      </div>
      
    </>
  );
};

export default Term;
