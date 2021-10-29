import React from 'react';
import { AiFillHome, AiFillPhone } from "react-icons/ai"
import { MdEmail } from 'react-icons/md'
import './Contact.css';

const Contact = () => {
return (
        <div className="my-5">
            <div className='Contact'>
            <h2 className="text-warning">Contuct us</h2>
            <div className="icons">
                <div>
                    <span className='bl-icon text-warning'><AiFillPhone /></span>
                    <h4> <span className="text-dark"> +00 34 234 231 </span></h4>
                </div>
                <div>
                    <span className='bl-icon text-warning'><MdEmail /></span>
                    <h4><span className="text-dark"> mail@balance.360.com </span></h4>
                </div>
                <div>
                    <span className='bl-icon text-warning'><AiFillHome /></span>
                    <h4> <span className="text-dark"> New York, USA </span></h4>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;


