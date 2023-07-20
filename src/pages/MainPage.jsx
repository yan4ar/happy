import React from 'react';
import '../styles/MainPage.css'
import Btn from '../components/ui/btn/Btn.jsx'
import title from '../assets/image/1.png'
import vector from '../assets/icon/Vector.svg'
import CardOne from '../components/ui/btn/CardOne.jsx'
import CardTwo from '../components/ui/btn/CardTwo.jsx'
import CardThree from '../components/ui/btn/CardThree.jsx'
import IconCardOne from '../assets/icon/1.svg'
import IconCardTwo from '../assets/icon/2.svg'
import IconCardThree from '../assets/icon/3.svg'
import ImageOneOne from '../assets/icon/woman1.svg'
import ImageOneTwo from '../assets/icon/woman2.svg'
import ImageOneThree from '../assets/icon/woman3.svg'
import IconOneOne from '../assets/icon/Stars1.svg'
import IconOneTwo from '../assets/icon/Stars2.svg'
import ImageBlogOne from '../assets/image/blog1.png'
import ImageBlogTwo from '../assets/image/blog2.png'
import ImageBlogThree from '../assets/image/blog3.png'
import free from '../assets/image/card1.png'
import book from '../assets/image/section__img.png'

const MainPage = () => {
    return (
        <>
            <div className='block'>
                <div className='container'>
                    <div className='block__flex'>
                        <div className="block__text-main">
                            <p className='block__text-one'>Proven strategies backed by science for success.</p>
                            <h1 className='block__text-main'>Live life at the full potential</h1>
                            <p className='block__text-two'>I help people to discover their true potential and live a fulfilling life...
                                Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                            <Btn text='Get your free guide now'></Btn>
                        </div>
                        <img src={title} alt=''/>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='title'>
                    <div className='title__one'>
                        <img className='title__img' src={vector} alt="" />
                        <p className='title__text-one'>I can help you in these particular areas.</p>
                    </div>
                    <div className='title__one'>
                        <p className='title__text-two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            <br /> <br />
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                </div>
                <div className='card__block-one'>
                    <CardOne
                        image={IconCardOne}
                        title={'1:1 Coaching'} >
                    </CardOne>
                    <CardOne
                        image={IconCardTwo}
                        title={'Consultation'} >
                    </CardOne>
                    <CardOne
                        image={IconCardThree}
                        title={'Group Coaching Sessions'} >
                    </CardOne>
                </div>
            </div>
            <div className='card__block-two'>
                <div className='container'>
                    <h1 className='card__title-two'>
                        Hear out what my clients say about me.
                    </h1>
                </div>
                <div className='cards-two'>
                    <CardTwo
                        text={'"I gained so much confidence in my ability to connect and deepen my relationships with people. "'}
                        image={ImageOneOne}
                        name={'Jane'}
                        icon={IconOneOne}>
                    </CardTwo>
                    <CardTwo
                        text={'"I gained so much confidence in my ability to connect and deepen my relationships with people. "'}
                        image={ImageOneTwo}
                        name={'Catherine'}
                        icon={IconOneTwo}>

                    </CardTwo>
                    <CardTwo
                        text={'"I gained so much confidence in my ability to connect and deepen my relationships with people. "'}
                        image={ImageOneThree}
                        name={'Jane'}
                        icon={IconOneTwo}>

                    </CardTwo>
                </div>

            </div>
            <div className="card__block-three">
                <div className="container">
                    <center>
                        <h1 className="card-three__title">
                            Stay Motivated, read the weekly blog articles.
                        </h1></center>
                    <div className="cards__three">
                        <CardThree
                            text={'Balancing your love and work life.'}
                            image={ImageBlogOne}
                        >
                        </CardThree>
                        <CardThree
                            text={'A short break from Social Media is important.'}
                            image={ImageBlogTwo}
                        >
                        </CardThree>
                        <CardThree
                            text={'How to be 1% Better Every Day'}
                            image={ImageBlogThree}
                        >
                        </CardThree>
                    </div>
                    <center>
                        <Btn text='Read more blogs'></Btn>
                    </center>
                </div>
            </div>
            <div className="free">
                <div className="container">
                    <div className="free__flex">
                    <div className="free__block">
                        <h1 className="free__title">
                            Don’t miss out on my ‘Live life at the full potential’ free guide
                        </h1>
                        <p className="free__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                        <p className="free__text-two">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <Btn text='Get your free guide now'></Btn>
                    </div>
                    <img className='free__img' src={free} alt=''/>
                </div>
                </div>
            </div>
            <div className="book">
                <div className="container">
                    <div className="book__flex">
                    <div className="book__block">
                        <h1 className="book__title">
                        Get 15-Minutes Complimentary online session.
                        </h1>
                        <p className="book__text">
                        Limited Period Offer. Claim Now.
                        </p>
                       
                        <Btn text='Book now'></Btn>
                    </div>
                    <img className='book__img' src={book} alt=''/>
                </div>
                </div>
            </div>
           
        </>
    );
}

export default MainPage;