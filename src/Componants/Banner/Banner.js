import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 text-light"
                    src="https://i.ibb.co/yXh7Dhf/swi.jpg"
                    alt="First slide"
                    
                />
                <Carousel.Caption className="text-light">
                    <h3>Summer Offer in Swizerland</h3>
                    <p className="text-h5">One of Most visited place in world Canada. with 7 Days and 6 Night, Food, Photograpy, Riding, Hiking etc.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 text-light"
                    src="https://i.ibb.co/1LDCMSs/jovyn-chamb-i-WMfi-Inivp4-unsplash.jpg"
                    alt="Second slide"
                    
                />
                <Carousel.Caption className="text-light">
                    <h3>Special Tour India (Taj Mahal)</h3>
                    <p>Tour with us in India Most Popular Symbol of Love only 5 Days and 4 Night with Free Ticket, Foods, Photograpy, Riding, Swiiming.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 text-light"
                    src="https://i.ibb.co/0K1nyW2/stefan-stefancik-0w-Mmx-NB6-Xzc-unsplash.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>Tour In Austrealia</h3>
                    <p>7 Days 6 Night with Breakfast, Lanch & Dinner.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;



// 
// 
// 
// 
// 
// https://i.ibb.co/t8ZmQxL/john-lee-o-Mne-OBYh-Jx-Y-unsplash.jpg
// https://i.ibb.co/Wy5DbCR/jovyn-chamb-i-WMfi-Inivp4-unsplash.jpg
// https://i.ibb.co/V3rhFXw/lucas-davies-i-P8-El-Ehq-He-Y-unsplash.jpg
// https://i.ibb.co/ZYW5Bqd/mesut-kaya-e-Ocyhe5-9s-Q-unsplash.jpg
// https://i.ibb.co/KF55sSY/sumit-sourav-e-SRtx-Pd9q1c-unsplash.jpg