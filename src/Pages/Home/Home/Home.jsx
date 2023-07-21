import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import PopularProducts from '../PopularProducts/PopularProducts';
import Term from '../Term/Term';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <PopularProducts></PopularProducts>
            <Term></Term>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;