import '../../styles/Footer.css'
import logo from '../../assets/icon/Logo.svg'
import iconOne from '../../assets/icon/face.svg'
import iconTwo from '../../assets/icon/itsface.svg'
import React from 'react';
import iconThree from '../../assets/icon/ball.svg'
const Footer = () => {
   

    return (
        <>
         <div className="email">
                <div className="container">
                    <div className="email__flex">
                <div className="email__one">
                    <p className="email__title">Get notified when I publish new articles</p>
                    <p className="email__text">Stay up to date with the latest news, announcements, and articles.</p>
                </div>
                <div className="email__input-label">
                    <input name='email' type="email" placeholder='Enter your email' />
                    <label htmlFor="email">
                        <button className='email__btn'>Subscribe</button>
                    </label>
                </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="footer__flex">
                    <div className="footer__block">
                        <img src={logo} alt="" />
                        <p className="footer__decor">
                            Design amazing digital experiences that <br /> create more happy in the world.
                        </p>
                    </div>
                    <div className="footer__block">
                        <a href='' className="footer__titile">
                            Pages
                        </a>
                        <ul className="footer__ul">
                            <a href="">
                                <li className="footer__li footer__li_margin">Home
                                </li>
                            </a>
                            <a href="">
                                <li className="footer__li ">Services</li>
                            </a> 
                            <a href=""> 
                                <li className="footer__li ">About us
                                </li> 
                            </a> 
                            <a href=""> 
                                <li className="footer__li ">Extra Sales/Landingpage
                                </li> 
                            </a> 
                            <a href=""> 
                                <li className="footer__li ">Free guide</li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer__block">
                    <a href='' className="footer__titile">
                    Contact
                        </a>
                        <ul className="footer__ul">
                            <a href="">
                                <li className="footer__li footer__li_margin">+123 456 789
                                </li>
                            </a>
                            <a href="">
                                <li className="footer__li "> hello@happydigital.nl</li>
                            </a> 
                            <a href=""> 
                                <li className="footer__li "> Instagram
                                </li> 
                            </a> 
                            <a href=""> 
                                <li className="footer__li ">LinkedIn
                                </li> 
                            </a> 
                           
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="footer__end">
                    <a href='' className="footer__end-text">
                        Made with <span className='footer__end-decor'> Yan4ar Company </span>
                    </a>
                    <div className="footer__icon">
                       <a href=""><img src={iconOne} alt="" /></a> 
                          <a href=""><img src={iconTwo} alt="" /></a> 
                          <a href=""><img src={iconThree} alt="" /></a> 
                    </div>
                </div>
            </div>
            
        </>
    );
}



export default Footer;