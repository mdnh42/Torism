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
                    
                    <ul>
                        <li>
                            <p>Email: {order.email}</p>
                            <p>Name: {order.name}</p>
                            <p>Offer Price: {order.price}</p>
                            <p>Status: {order.status}</p>
                        </li>
                    </ul>


                </div>)
            }
        </div>
    );
};

export default MyOrders;