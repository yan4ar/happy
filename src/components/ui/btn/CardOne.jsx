import '../../../styles/CardOne.css'
import React from 'react';
const CardOne = ({ image, title }) => {
    return (
        <div className='card'>
            <img src={image} alt="" />
            <p className='card__title'>{title}
            </p>
            <p className='card__p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.

            </p>
        </div>
    );
}

export default CardOne;