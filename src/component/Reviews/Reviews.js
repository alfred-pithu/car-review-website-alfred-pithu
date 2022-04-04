import React from 'react';
import useData from '../../Hooks/useData/useData';
import Card from '../Card/Card';
import './Reviews.css'

const Reviews = () => {
    const [data, setData] = useData();
    return (
        <div className=' container mx-auto row row-cols-1 row-cols-lg-3 g-3 my-5'>
            {
                data.map(review => <Card key={review.id} review={review} ></Card>)
            }
        </div>
    );
};

export default Reviews;