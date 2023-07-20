import logo from '../../assets/icon/Logo.svg'
import React from 'react';
import '../../styles/Header.css'

import { NavLink } from 'react-router-dom';
const Header = () => {
    return ( 
       <div className='container'>
       <nav className='nav'>
       <a className="logo">
            <img src={logo}></img>
          </a>
        <ul className='nav__ul'>
           <a  className='nav__a'>
           <NavLink to='/mainPage'> <li className='nav__li'>Home </li></NavLink>
           </a>
           <a  className='nav__a'><NavLink to='/services'><li className='nav__li nav__li_margin'>Services</li></NavLink></a>
           <a className='nav__a'><NavLink to='/about'> <li className='nav__li nav__li_margin'>About us</li></NavLink></a>
           <a  className='nav__a'> <NavLink to='/salepages'> <li className='nav__li nav__li_margin'>Extra Salespage</li></NavLink></a>
           <NavLink to='/free'><button className='nav__btn'>
           Get your free guide now
           </button></NavLink>
        </ul>
       </nav>
       </div>
     );
}
 
export default Header;