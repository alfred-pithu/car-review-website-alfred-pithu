import React from 'react';
import useData from '../../Hooks/useData/useData';
import Card from '../Card/Card';
import './Reviews.css'

const Reviews = () => {
    const [data, setData] = useData();
    return (
        <div>
            <h2 className='text-center mt-5 mb-0'>What Our Customer Say!</h2>
            <div className=' container mx-auto row row-cols-1 row-cols-lg-3 gy-4 my-3'>
                {
                    data.map(review => <Card key={review.id} review={review} ></Card>)
                }
            </div>
        </div>
    );
};

export default Reviews;