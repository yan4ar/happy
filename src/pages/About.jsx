import '../styles/About.css'
import Btn from '../components/ui/btn/Btn.jsx'
import { NavLink } from 'react-router-dom';
import Hero from '../assets/image/hero.png'
import LogoOne from '../assets/icon/logo1.svg'
import LogoTwo from '../assets/icon/logo2.svg'
import LogoThree from '../assets/icon/logo3.svg'
import LogoFour from '../assets/icon/logo4.svg'
import LogoFive from '../assets/icon/logo5.svg'
import About__freatures__section from '../components/ui/About__freatures__section'
import FAQ__section from '../components/ui/FAQ__sections'
import Rate__section from '../components/ui/Rate__section'
import jane from '../assets/icon/jane.svg'
import catherina from '../assets/icon/catherina.svg'
import ready__to__start from '../assets/icon/ready__to__start.svg'
import schedule from '../assets/icon/schedule.svg'
import chat from '../assets/icon/chat.svg'
import medal from '../assets/icon/medal.svg'
import bell from '../assets/icon/bell.svg'
import plus from '../assets/icon/plus.svg'



const About = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero__flex">
                    <div className="hero__text">
                        <p className="hero__prew">
                            Proven strategies backed by science for success.
                        </p>
                        <p className="hero__title">
                            About me
                        </p>
                        <p className="hero__decor">
                            I help people to discover their true potential and live a fulfilling life...
                            Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
                        </p>
                        <NavLink to='/free'><Btn text={'Get your free guide now'}></Btn></NavLink>
                    </div>
                    <img className='hero__img' src={Hero} alt="" />
                </div>
                </div>
            </div>

            <div className="container">
                <center>
                    <p className="swiper__title">
                    From startups to the world’s largest companies
                    </p>
                    <div className="swiper">
                        <div className="swiper__content">
                            <img src={LogoOne} alt="" />
                            <img src={LogoTwo} alt="" />
                            <img src={LogoThree} alt="" />
                            <img src={LogoFour} alt="" />
                            <img src={LogoFive} alt="" />
                        </div>
                    </div>
                </center>
            </div>

            <div className="about__rate">
            <div className="container__rate">
                <h1 className="about__rate__head">
                    Hear out what my <br />
                    clients say about me.
                </h1>
                <div className="about__rate__block">
                    <Rate__section
                    text={"I gained so much confidence in my ability to connect and deepen my relationships with people. "}
                    rate="5/5"
                    img={jane}
                    name="Jane"
                    />
                    <Rate__section
                    text="“Denise helped me organise my diet. Highly recommend her services!”"
                    rate="5/5"
                    img={catherina}
                    name="Catherina"
                    />
                    <Rate__section
                    text={"I gained so much confidence in my ability to connect and deepen my relationships with people. "}
                    rate="5/5"
                    img={jane}
                    name="Jane"
                    />
                </div>
            </div>
        </div>
        <div className="about__freatures">
            <div className="container">
                <p className="about__freatures__smalltext">How does it work?</p>
                <h1 className="about__freatures__heading">Are you ready to transform your life?</h1>
                <p className="about__freatures__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua minim veniam.
                </p>
                <div className="about__freatures__block">
                    <About__freatures__section
                    icon={ready__to__start}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <About__freatures__section
                    icon={schedule}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <About__freatures__section
                    icon={chat}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </div>
                <div className="about__freatures__block">
                    <About__freatures__section
                    icon={medal}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <About__freatures__section
                    icon={bell}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <About__freatures__section
                    icon={chat}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </div>
            </div>
        </div>
        <div className="about__FAQ">
            <div className="container">
                <h1 className="head">Good to know.</h1>
                <p className="FAQ__under__head">Everything you need to know about the my services.</p>
                <ul className="FAQ__ul">
                    <li className="FAQ__li">
                        <FAQ__section
                        head="How long does the coaching process take?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus}
                        />
                    </li>
                    <li className="FAQ__li">
                        <FAQ__section
                        head="What if I wanted to end my coaching engagement?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus}
                        />
                    </li>
                    <li className="FAQ__li">
                        <FAQ__section
                        head="Can I change through coaching?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus}
                        />
                    </li>
                    <li className="FAQ__li">
                        <FAQ__section
                        head="How often do we meet?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus}
                        />
                    </li>
                </ul>

            </div>
            <div className="FAQ__questions__background">
                <div className="container">
                    <h2 className="FAQ__head">Still have questions?</h2>
                    <p className="FAQ__questions__text">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    <div className="btn__questions">
                    <Btn text="Get in touch"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;