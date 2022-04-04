import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, review, text } = props.review
    return (
        <div class="col">
            <div class="card h-100">

                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p>{text}</p>
                    <p class="card-text">Rating : {review}</p>
                </div>

            </div>
        </div>
    );
};

export default Card;