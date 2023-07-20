import '../styles/Free.css'
import Prew from '../assets/image/card1.png'
import FreeCard from '../components/ui/FreeCard';
import CardFive from '../components/ui/btn/CardFive';
import FiveCardThree from '../assets/icon/53.svg'
import FiveCardFour from '../assets/icon/54.svg'
import video__player from '../assets/image/Video_player.png'
import Stars from '../assets/icon/Stars1.svg'
import Btn from '../components/ui/btn/Btn.jsx'
const Free = () => {
    return (
        <>
          
                <div className="prew">
                    <div className="prew__block">
                        <h1 className="prew__title">Results that speak for themselves</h1>
                        <p className="prew__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                        <input  className='prew__inp prew__inp_margin-two' type="text" placeholder='Name' />
                        <input className='prew__inp prew__inp_margin' type="email" placeholder='Enter your email'  />
                        <p className="prew__down">We care about your data in our <a href="" className='prew__a'> privacy policy</a></p>
                        <button className='prew__btn'>Get free guide </button>
                    </div>
                  <div className="prew__abs">
                        <img src={Prew} alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="test">
                        <div className="test__text">
                            <p className="test__title">Testimonials</p>
                            <p className="test__decor">Results that speak for themselves</p>
                        </div>
                        <button className='test__btn'>Get started</button>
                    </div>

                    <div className="free__cards">

                        <div className="free__cards-block">
                         <FreeCard
                         strong={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'}
                         text={'sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                         >
                         </FreeCard>
                         <FreeCard
                         strong={''}
                         text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                         >
                         </FreeCard>
                        </div>
                        <div className="free__cards-block free__cards-block_marign">
                         <FreeCard
                         strong={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'}
                         text={'sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                         >
                         </FreeCard>
                         <FreeCard
                         strong={''}
                         text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                         >
                         </FreeCard>
                        </div>
                    </div>
                </div>
               
                <div className="freeguide__freatures__section">
            <div className="container">
                <div className="freeguide__freatures__flex">
                    <div className="freeguide__freatures__heading">
                        <p className="smalltext">How does it work?</p>
                        <h1 className="freeguide__head">
                            Are you ready to <br />
                            transform your life?
                        </h1>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
                            do eiusmod tempor incididunt ut labore et dolore magna <br />
                            aliqua minim veniam.
                        </p>
                    </div>
                    <div>
                        <ul className="freeguide__freatures__ul">
                            <li className="freeguide__freatures__li">
                            <CardFive
                            icon={FiveCardThree}
                            title={'Online consultation'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}>
                        </CardFive>
                       
                            </li>
                            <li className="freeguide__freatures__li">
                            <CardFive
                            icon={FiveCardFour}
                            title={'Ready to start? Let’s talk!'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}>
                        </CardFive>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="freeguide__freatures__video">
                    <img className="freeguide__freatures__img" src={video__player} alt="" />
                </div>
            </div>
        </div>
        <div className="freeguide__cta">
            <div className="container__cta">
                <div className="freeguide__cta__flex">
                    <h1 className="head">
                        Don’t miss out on my <b className="green__head">‘Live life at the full potential’</b> free guide
                    </h1>
                    <p className="freeguide__cta__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                        eiusmod tempor incididunt ut labore et dolore magna aliqua minim <br />
                        veniam. Sed ut perspiciatis unde omnis iste natus error sit <br />
                        voluptatem accusantium doloremque laudantium.
                    </p>
                    <div className="freeguide__cta__btn__margin"><Btn text="Download my free guide"/></div>
                    <p className="smalltext">More than 100+ 5 star reviews</p>
                    <img className="freeguide__cta__star" src={Stars} alt="" />
                </div>
            </div>
        </div>
        
           </>
    );
}

export default Free;