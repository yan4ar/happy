import '../../../styles/CardFive.css'
const CardFive = ({icon,title,text}) => {
    return ( 
        <>
        <div className="five">
            <img src={icon} alt="" />
            <div className="five__block">
                <p className="five__title">
                    {title}
                </p>
                <p className="five__text">
                    {text}
                </p>
            </div>
        </div>
        </>
     );
}
 
export default CardFive;