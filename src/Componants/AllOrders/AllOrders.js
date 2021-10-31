import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Offer from '../Offer/Offer';

const AllOrders = () => {
    const [allOrders, setAllOrder] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/all-orders/')
            .then(offers => setAllOrder(offers.data)


            )
    }, [])
    const handleDelete = id =>{
        console.log("click", id)
        const url = `http://localhost:5000/all-orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted');
                const remaining = allOrders.filter(order => order._id !== id);
                setAllOrder(remaining);
            }
            
        })
    }
    return (
        <div>
            <h2 className="text-center text-warning mt-5">Manage All Order </h2>
            {
                allOrders.map(order => <div className="container">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                        <tr scope="row">
                            <th scope="col">Email:</th>
                            <th scope="col">Name:</th>
                            <th scope="col">Price:</th>
                            <th scope="col">Action:</th>
                        </tr>
                        </thead>
                       <tbody>
                        <tr scope="row">
                            <th>{order.email}</th>
                            <th>{order.name}</th>
                            <th> {order.price}</th>
                            <th> <button onClick={() =>handleDelete(order._id)} className="btn btn-danger">Delate</button> </th>
                        </tr>
                        </tbody>
                    </table>

                </div>)
            }


        </div>
    );
};

export default AllOrders;