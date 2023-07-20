import '../../../styles/CardFour.css'

const CardFour = ({icon,title,text,titleTwo}) => {
    return ( 
        <>
        <div className="ares">
            <div className="ares__flex">
                <img className='ares__img' src={icon} alt="" />
                <p className='ares__titleTwo'>{titleTwo}</p>
                <p className='ares__title'>{title}</p>
                <p className='ares__text'>{text}</p>
            </div>
        </div>
        </>
     );
}
 
export default CardFour;