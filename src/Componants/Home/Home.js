import React from 'react';
import Available from '../Available/Available';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Offers from '../Offers/Offers';


const Home = () => {
    return (
        <div>
             {/* Banner Section Carosel */}
             <Banner></Banner>

             {/* Our Offers */}
            <Offers></Offers>
             {/* Available our Area */}
            <Available></Available>

            {/* Contact  */}
            <Contact></Contact>
        </div>
    );
};

export default Home;