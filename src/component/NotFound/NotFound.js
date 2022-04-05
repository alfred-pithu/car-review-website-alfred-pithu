import React from 'react';
import './NotFound.css'
import image from '../../404.jpg'

const NotFound = () => {
    return (
        <div>
            <div className='w-75 mt-0 mx-auto d-flex justify-content-center'>
                <img className='img-fluid w-75' src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFound;