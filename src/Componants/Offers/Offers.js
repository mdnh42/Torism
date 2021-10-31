import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Offer from '../Offer/Offer';
const axios = require('axios').default;

const Offers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {

        axios.get('https://ghoulish-mansion-34533.herokuapp.com/offers')
            .then(offers => {
                setOffers(offers.data);
            })

    }, [])
    return (
        <div className="container my-5">
            <h2 className="text-warning text-center mb-3">Our Offers</h2>
            <Row xs={3} md={2} lg={3} className="g-4">
                {
                    offers.map(offer => 
                        <Offer {...offer} />
                    )
                }
            </Row>

        </div>
    );
};

export default Offers;