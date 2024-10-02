import React from 'react';
import { assets } from '../../assets/assets'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title'>FoodiFy</div>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
