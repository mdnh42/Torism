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

    const handleConfirmBtn = id => {
        axios.put('http://localhost:5000/change-status', { id: id })
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    const remainning = orders.filter(order => order._id !== id)
                    const { status, ...rest } = orders.find(order => order._id === id)
                    const updated = { ...rest, status: 'confirmed' }

                    setOrders([updated, ...remainning])
                }
                else {
                    alert('Something went wrong, please try again later')
                }
            })
            .catch(error => console.log('got an error: ', error))

    }   


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
                            <p>Status: {order.status}</p>
                            <button onClick={() => handleConfirmBtn(order._id)} className="btn-warning text-white">confirm</button>
                       </div>


                </div>)
            }
        </div>
    );
};

export default MyOrders;