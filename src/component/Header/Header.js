import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import CustomLink from '../../Hooks/CustomLink/CustomLink'

const Header = () => {
    return (
        <div className='d-flex justify-content-center mt-3 container-link'>
            <CustomLink className='text-decoration-none fw-bold  me-3' to='/'>HOME</CustomLink>
            <CustomLink className='text-decoration-none fw-bold  me-3' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='text-decoration-none fw-bold me-3' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='text-decoration-none fw-bold me-3' to='/blogs'>BLOGS</CustomLink>
            {/* <CustomLink className='text-decoration-none fw-bold me-3' to='/about'>ABOUT</CustomLink> */}
        </div>
    );
};

export default Header;