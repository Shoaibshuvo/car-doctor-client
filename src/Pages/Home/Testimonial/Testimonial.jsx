import React, { useEffect, useState } from 'react';
import ReviewsPost from './ReviewsPost';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
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
            reviews.map(review => <ReviewsPost key={review.id} review={review}></ReviewsPost>)
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

export default Testimonial;