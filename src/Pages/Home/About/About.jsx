import React from "react";

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src="https://i.ibb.co/vcBCynS/person.jpg"
              className="w-3/4 rounded-lg shadow-2xl"
            />
            <img
              src="https://i.ibb.co/FwKcvwg/parts.jpg"
              alt=""
              className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
            />
          </div>

          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-[#FF3811] font-extrabold text-2xl">About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6 text-[#737373]">
              There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Do Not Look Even Slightly Believable.
              <br />
              <br />
              The Majority Have  Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Do Not Look Event Slightly Believable.
            </p>
            <button className="btn bg-[#FF3811] text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
