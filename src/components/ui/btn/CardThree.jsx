import '../../../styles/CardThree.css'
import React from 'react';
const CardThree = ({ image, text }) => {
    return (
        <div className='card__three'>
            <img src={image} alt='' />
            <div className="block__text">
                <p className="card__decor">{text}</p>
                <p className="card__decor-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                </p></div>
        </div>
    );
}

export default CardThree;