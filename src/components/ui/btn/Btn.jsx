import '../../../styles/Btn.css';
import React from 'react';

const Btn = ({text}) => {
    return (
        <button className='btn'>
          {text}
           </button>
      );
};
 
export default Btn;