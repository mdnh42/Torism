import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import useFirebase from '../../Hooks/useFirebase';

const OfferDetails = () => {
    const [offer, setOffer] = useState({})
    const { id } = useParams()
    const {user} = useFirebase()

    useEffect(() => {
        axios.get(`https://ghoulish-mansion-34533.herokuapp.com/offers/${id}`)
            .then(res => setOffer(res.data));
    }, [])

    const handlePlaceOrder = () => {
        console.log('place o b')
        const email = user.email;
        const offer_id = id;
        const price = offer.price;
        const name = offer.name;
        const img = offer.img;
        const status = 'panding';
        axios.post('https://ghoulish-mansion-34533.herokuapp.com/place-order', {
            email,
            offer_id,
            price,
            name,
            img,
            status
        })
            .then(result => {
                if (result.data.insertedId) {
                    alert('Your order is placed')
                }
                else {
                    alert("Something went wrong. please try again")
                }
            })
            .catch(error => {
                alert("Something went wrong. please try again")
                console.log("got an error: ", error)
            })

    }




    return (
        <div className="container">
            <div className="row">
                <div className="col col-lg-10 col-sm-12">
                    <h3>{offer.name}</h3>
                    <img src={offer.img} alt="" className="img-fluid" />
                    <p>{offer.offerDetails}</p>
                </div>
                <div className="col col-lg-2 col-sm-12 my-5 py-3 bg-light">
                    
                    <h2>Place Order</h2>
                    <p>Price: ${offer.price}</p>
                    <p>Discount $20</p>
                    <p>{offer.price - 20}</p>
                    <button className="btn-warning text-white fw-bold" onClick={handlePlaceOrder}>Booking Confirm</button>
                </div>
            </div>



        </div>
    );
};

export default OfferDetails;