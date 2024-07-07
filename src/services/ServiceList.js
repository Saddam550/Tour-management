import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'react-bootstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Partly cloudy with a chance of afternoon showers"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Passionate expert sharing stories, history, and hidden gems"
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailored solutions, personalized for your unique needs"
    }
]

const ServiceList = () => {
    return (
        <>
            {servicesData.map((item, index) =>(
                <Col lg="3" key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))} 
        </>
    );
};

export default ServiceList;