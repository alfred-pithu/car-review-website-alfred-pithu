import React from 'react';
import './NotFound.css'
import image from '../../404.jpg'

const NotFound = () => {
    return (
        <div>
            <div className='w-75 mt-0 mx-auto'>
                <img className='img-fluid w-100' src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFound;