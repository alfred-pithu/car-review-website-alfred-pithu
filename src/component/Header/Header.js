import React from 'react';
import './Header.css'
import CustomLink from '../../Hooks/CustomLink/CustomLink'

const Header = () => {
    return (
        <div className=' d-lg-flex flex-lg-row d-flex flex-column align-items-center justify-content-center mt-3 container-link mb-5'>
            <CustomLink className='text-decoration-none fw-bold me-3' to='/'>HOME</CustomLink>
            <CustomLink className='text-decoration-none fw-bold me-3 ' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='text-decoration-none fw-bold me-3 ' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='text-decoration-none fw-bold me-3 ' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='text-decoration-none fw-bold me-3 ' to='/about'>ABOUT</CustomLink>
        </div>
    );
};

export default Header;