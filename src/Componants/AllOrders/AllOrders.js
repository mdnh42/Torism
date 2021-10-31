import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllOrders = () => {
    const [allOrders, setAllOrder] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/all-orders/')
            .then(offers => setAllOrder(offers.data)


            )
    }, [])
    return (
        <div>
            <h2 className="text-center text-warning mt-5">Manage All Order </h2>
            {
                allOrders.map(allOrder => <div className="container">
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
                            <th>{allOrder.email}</th>
                            <th>{allOrder.name}</th>
                            <th> {allOrder.price}</th>
                            <th> <button className="btn btn-danger">Delate</button> </th>
                        </tr>
                        </tbody>
                    </table>

                </div>)
            }


        </div>
    );
};

export default AllOrders;