import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import axios from 'axios';

const MyOrders = () => {
    const { } = useFirebase();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/my-orders/mdnh.42@gmail.com')
            .then(res => setOrders(res.data))
            .catch(error => console.log(error))

    }, [])

    return (
        <div>
            <h2 className="text-center text-warning">My Order </h2>
            {
                orders.map(order => <div className="container">
                    
                    <div className="row bg-light m-3">
                            <p>Client Name: {order.email}</p> 
                            <p>Offer: {order.name}</p>
                            <img src={order.img} alt="" />
                            <p>Offer Price: {order.price}</p>
                            <button className="btn-warning text-white">Status: {order.status}</button>
                       </div>


                </div>)
            }
        </div>
    );
};

export default MyOrders;