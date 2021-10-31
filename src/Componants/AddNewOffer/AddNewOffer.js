import './AddNewOffer.css';
import React, { useRef } from 'react';
import axios from 'axios';

const AddNewOffer = () => {
    const nameRef = useRef()
    const detailsRef = useRef()
    const facRef = useRef()
    const imgRef = useRef()
    const priceRef = useRef()


    const handleAddServiceBtn = e => {
        console.log('ad')
        const name = nameRef.current.value
        const des = detailsRef.current.value
        const serDe = facRef.current.value
        const price = priceRef.current.value
        const img = imgRef.current.value

        const newService = { name, des, serDe, price, img }

        axios.post('http://localhost:5000//addNewOffer', newService)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service added')
                }
                else {
                    alert('something went wrong, please try again')
                }
            })
            .catch(error => console.log('Got an error: ', error))

        e.preventDefault();

    }


    return (
        <div className='add-service'>
            <h2>Add New Offer</h2>


            <form onSubmit={handleAddServiceBtn} >
                <p><b>Service Name :</b></p>
                <input required type="text" ref={nameRef} />
                <p><b>Description: </b></p>
                <textarea required rows="5" ref={detailsRef}></textarea>
                <p><b>Facilities :</b></p>
                <textarea required rows="3" ref={facRef}></textarea>
                <p><b>Price :</b></p>
                <input required type="text" ref={priceRef} />
                <p><b>Image url :</b></p>
                <input required type="text" ref={imgRef} />
                <br />
                <input type="submit" value="Add Service" />

            </form>
        </div>
    );
};

export default AddNewOffer;