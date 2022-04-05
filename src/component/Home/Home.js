import React from 'react';
import './Home.css'
import car from '../../images/car.jpg'
import { useNavigate } from 'react-router-dom';
import useData from '../../Hooks/useData/useData';
import Card from '../Card/Card';

const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useData();
    const modifiedData = data.splice(0, 3);
    console.log(modifiedData);
    return (
        <div>
            <div className='home-container container mt-5 mb-lg-0 mb-5 row mx-auto ' >

                <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center '>
                    <h1 className='fw-bolder text-primary text-center mb-4'>Your New Car</h1>
                    <p className='text-start fw-bold '>
                        Choosing your new car is always a tough choice we understand. Luckily you are at the right place and we got you covered. Check the reviews of this model to get the answers to your all questions.
                    </p>
                </div>

                <div className='col-12 col-lg-6 d-flex align-items-center justify-content-center '>
                    <img className='img-fluid border rounded-2 ' src={car} alt="" />
                </div>
            </div>

            <div className=' mt-5 '>
                <h2 className='text-center'>Customer Reviews</h2>

                <div className=' container mx-auto row row-cols-1 row-cols-lg-3 g-3 mt-4 mb-3'>
                    {
                        modifiedData.map(review => <Card key={review.id} review={review}></Card>)
                    }
                </div>

                <div className='d-flex justify-content-center mb-3'>
                    <button onClick={() => navigate('/reviews')} className='btn btn-primary '>See All Reviews</button>
                </div>
            </div>

        </div>
    );
};

export default Home;