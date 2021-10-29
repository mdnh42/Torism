import React from 'react';

const Available = () => {
    return (
        <div className="bg-light py-5">
            <div className="container">
                <div className="row-cols-1">
                    <h2 className="text-center text-warning">Available Offer</h2>
                    <p className="text-center text-dark">We will providing Tour Offer many country.</p>
                </div>
                <div className="text-center">
                    <input className="px-5" type="search" name="search" id="" placeholder="Write Your Area ............. " />
                    <br/>
                    <br/>
                    <input type="submit" value="Searching" className="btn btn-danger px-5" />
                </div>


            </div>
        </div>
    );
};

export default Available;