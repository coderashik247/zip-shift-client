import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import Services from '../Services/Services';
import Features from '../Features/Features';
import Brands from '../Brands/Brands';
import CourierHero from '../CourierHero/CourierHero';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <Services></Services>
            <Brands></Brands>
            <Features></Features>
            <CourierHero></CourierHero>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;