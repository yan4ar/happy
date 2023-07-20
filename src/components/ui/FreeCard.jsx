import '../../styles/FreeCard.css'
import Stars from '../../assets/icon/Stars1.svg'
import Avatar from '../../assets/image/Avatar.png'
const FreeCard = ({text,strong}) => {
    return ( 
        <>
        <div className="free__card">
            <p className="free__card-color"> <p className="free__card-text">{strong}
                </p>{text} </p>
                <img className='free__img' src={Avatar} alt="" />
                <p className="free__card-name">Naam</p>
                <p className="free__card-downName">Bedrijf</p>
                <img className='free__icon' src={Stars} alt="" />
        </div>
        </>
     );
}
 
export default FreeCard;