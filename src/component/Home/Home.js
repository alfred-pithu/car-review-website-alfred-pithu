import React from 'react';
import './Home.css'
import car from '../../images/car.jpg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='home-container container mt-5  h-100 ' >
                <div className='w-75 mx-auto'>
                    <h1 className='fw-bolder text-primary text-center mb-4'>Your New Car</h1>
                    <p className='text-start'>
                        Choosing your new car is always a tough choice we understand. Luckily you are at the right place and we got you covered. Check the reviews of this model to get the answers to your all questions.
                    </p>
                </div>


                <div className=''>
                    <img className='img-fluid ' src={car} alt="" />
                </div>
            </div>

            <div className='mt-5'>
                <h2 className='text-center'>Customer Reviews</h2>

                <div className='card-container'>

                </div>

                <div className='d-flex justify-content-center mb-3'>
                    <button onClick={() => navigate('/reviews')} className='btn btn-primary '>See All Reviews</button>
                </div>
            </div>

        </div>
    );
};

export default Home;