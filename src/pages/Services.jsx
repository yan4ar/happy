import '../styles/Services.css'
import CardFour from '../components/ui/btn/CardFour';
import CardFive from '../components/ui/btn/CardFive';
import title from '../assets/image/title.png'
import CardIconOneServ from '../assets/icon/2page1.svg'
import CardIconTwoServ from '../assets/icon/2page2.svg'
import CardIconThreeServ from '../assets/icon/2page3.svg'
import CardIconFourServ from '../assets/icon/2page4.svg'
import FiveCardOne from '../assets/icon/5p1.svg'
import FiveCardTwo from '../assets/icon/52.svg'
import FiveCardThree from '../assets/icon/53.svg'
import FiveCardFour from '../assets/icon/54.svg'
import Comp from '../assets/image/comp.png'
import Accord from '../components/ui/btn/Accord';
import Minus from '../assets/icon/minus.svg'
const Services = () => {
    //let dn = document.querySelector('.accord__text');
    //let btn = document.querySelector('.accord__img');
    //btn.onclick = (e) => {
    //    dn.classList.toggle('active');
    //};
    return (
        <>
            <div className='block-two'>
                <div className='container'>
                    <div className='block__two-flex'>
                        <div className="block__two-text-main-main">
                            <p className='block__two-text-one'>I can help you in these patricular areas.</p>
                            <p className='block__two-text-main'>I help people to discover their true potential</p>
                            <p className='block__two-text-two'>I help people to discover their true potential and live a fulfilling life...
                                Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                        </div>
                        <img className='block__img-two' src={title} alt='' />
                    </div>
                </div>
            </div>
            <center>
                <p className='title__block'>I can help you in these particular areas.</p>
            </center>
            <div className="container">
                <div className="serv">

                    <div className="serv__cards">
                        <CardFour
                            icon={CardIconOneServ}
                            titleTwo={'Group Coaching Sessions'}
                            title={''}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'}>
                        </CardFour>
                        <CardFour
                            icon={CardIconTwoServ}
                            titleTwo={''}
                            title={'Online course'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'}>
                        </CardFour>
                    </div>
                    <div className="serv__cards-two">
                        <CardFour
                            icon={CardIconOneServ}
                            titleTwo={'Group Coaching Sessions'}
                            title={''}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'}>
                        </CardFour>
                        <CardFour
                            icon={CardIconTwoServ}
                            titleTwo={''}
                            title={'Online course'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'}>
                        </CardFour>
                    </div>

                </div>

                <div className="live">
                    <p className="live__prew">
                        How does it work?
                    </p>
                    <p className="live__title">
                        Are you ready to transform your life?
                    </p>
                    <p className="live__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.

                    </p>
                </div>

                <div className="comp">
                    <div className="comp__block">
                        <CardFive
                            icon={FiveCardOne}
                            title={'Talk to me first'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}>
                        </CardFive>
                        <CardFive
                            icon={FiveCardTwo}
                            title={'Schedule a meeting'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}>
                        </CardFive>
                        <CardFive
                            icon={FiveCardThree}
                            title={'Online consultation'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}>
                        </CardFive>
                        <CardFive
                            icon={FiveCardFour}
                            title={'Ready to start? Let’s talk!'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}>
                        </CardFive>
                    </div>
                    <img src={Comp} alt="" />
                </div>


                <center>
                    <div className="good">
                        <h1 className="good__title">
                            Good to know.
                        </h1>
                        <p className="good__text">
                            Everything you need to know about the my services.
                        </p>
                    </div>
                </center>

                <div className="accord__block">
                    <div className="accord accord_margin">
                        <div className="accord__flex">
                            <p className="accord__title">
                            How long does the coaching process take?
                            </p>
                            <p className="accord__text active">
                                Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                            </p>
                        </div>
                        <img className='accord__img' src={Minus} alt="" />
                    </div>
                 
                    <Accord
                        title={'What if I wanted to end my coaching engagement?'}
                        text={'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'}
                    ></Accord>
                    <Accord
                        title={'Can I change through coaching?'}
                        text={'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'}
                    ></Accord>
                    <Accord
                        title={'How often do we meet?'}
                        text={'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'}
                    ></Accord>
                </div>

                <div className="quest">
                    <p className="quest__prew">
                    Still have questions?
                    </p>
                    <p className="quest__text">
                    Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </p>
                    <button className='quest__btn'>Get in touch</button>
                </div>

            </div>
        </>
    );
}

export default Services;