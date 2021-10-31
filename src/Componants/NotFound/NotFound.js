import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div id="notFound" className="container text-center py-5">
            <h2>Error</h2>
            <h4>This page are not available</h4>
           <Link to="/"> <button className="btn btn-danger">Back</button> </Link>
        </div>
    );
};

export default NotFound;