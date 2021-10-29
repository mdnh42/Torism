import React from 'react';
import { BsFacebook } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className="bg-dark pt-3 pb-3 text-center">
            <div>
                <h4 className="text-light">Tour <span className="text-warning"> Lovers </span></h4>
                <p className="text-light">Developed By || <a href= "https://facebook.com/mdnh1997" className="text-decoration-none"> MD Nur Hasan </a></p>
                <div>
                    <BsFacebook />
                </div>
            </div>
        </div>
    );
};

export default Footer;