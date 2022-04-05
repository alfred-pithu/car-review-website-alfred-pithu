import React from 'react';
import './Header.css'
import CustomLink from '../../Hooks/CustomLink/CustomLink'

const Header = () => {
    return (
        <div className=' py-3 d-lg-flex flex-lg-row d-flex flex-column align-items-center justify-content-center mt-3 container-link mb-5'>
            <CustomLink className='text-decoration-none fw-bold fst-italic me-3 fs-4' to='/'>HOME</CustomLink>
            <CustomLink className='text-decoration-none fst-italic fw-bold me-3 fs-4' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='text-decoration-none fw-bold fst-italic me-3 fs-4' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='text-decoration-none fw-bold fst-italic me-3 fs-4' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='text-decoration-none fw-bold fst-italic me-3 fs-4' to='/about'>ABOUT</CustomLink>
        </div>
    );
};

export default Header;