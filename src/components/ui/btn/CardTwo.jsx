import '../../../styles/CardTwo.css'
import React from 'react';
const CardTwo = ({icon, image, text,name }) => {
    return (
        <div className='card__two'>
          <p className='card__text'>{text}</p>
          <p className='card__name'>{name}</p>
          <img src={image} alt='' />
          <img src={icon} alt=''/>
        </div>
    );
}

export default CardTwo;