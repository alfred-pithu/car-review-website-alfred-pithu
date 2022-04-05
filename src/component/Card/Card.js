import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, review, text } = props.review
    return (
        <div className="col ">
            <div className="card h-100 rounded">

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{text}</p>
                    <p className="card-text">Rating : {review}</p>
                </div>

            </div>
        </div>
    );
};

export default Card;