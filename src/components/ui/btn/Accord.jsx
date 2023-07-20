import '../../../styles/Accord.css'
import Plus from '../../../assets/icon/plus.svg'
import Minus from '../../../assets/icon/minus.svg'

const Accord = ({ title, text }) => {
   
    return (
        
        <>
         <center><hr className='accord__hr' /></center> 
            <div className="accord">
                <div className="accord__flex">
                    <p className="accord__title">
                        {title}
                    </p>
                    <p className="accord__text">
                        {text}
                    </p>
                </div>
                <img className='accord__img' src={Plus} alt="" />
            </div>
         
        </>
    );
}

export default Accord;