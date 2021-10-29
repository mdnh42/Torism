import React from 'react';
import './Offer.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = ({ name, offerDetails, img, price, _id }) => {
    return (
        <div id="card-size" className="container">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title className="text-dark fw-bold">{name}</Card.Title>
                            <Card.Text>
                                <span className="fw-bold">Offer Details:</span> <br/>{offerDetails}
                            </Card.Text>
                            <Link to={`/details/${_id}`}> <button className="btn-warning text-white fw-bold">Booking ${price}</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            
        </div >
    );
};

export default Offer;