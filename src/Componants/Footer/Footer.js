import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
const Footer = () => {
    return (
        <div className="bg-dark pt-3 pb-3 text-center">
            <div>
                <h4 className="text-light">Tour <span className="text-warning"> Lovers </span></h4>
                <p className="text-light">Developed By || <a href= "https://facebook.com/mdnh1997" className="text-decoration-none"> MD Nur Hasan </a></p>
                <div >
                <a href="https://www.facebook.com/mdnh1997" target="_blank" rel="noopener noreferrer"> <span className="text-light pe-2 text-decoration-none h3">  <FaFacebook/> </span></a>
                <a href="https://www.github.com/mdnh42" target="_blank" rel="noopener noreferrer" ><span className="text-light ps-2 text-decoration-none h3">  <AiFillGithub /> </span></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;