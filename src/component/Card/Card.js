import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, rating, text } = props.review
    return (
        <div className="col ">
            <div className="card h-100 rounded">

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{text}</p>
                    <p className="card-text">Rating : {rating}</p>

                </div>

            </div>
        </div>
    );
};

export default Card;