import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Innovamos la forma en que disfrutas de tu comida favorita, asegurándonos de que llegue rápido, caliente y deliciosa a la puerta de tu hogar. Conéctate con nosotros en redes sociales y sigue todas nuestras novedades.</p>
                <div className="footer-social-icons">
                    <img onClick={() => window.open('https://www.facebook.com')} src={assets.facebook_icon} alt="" />
                    <img onClick={() => window.open('https://www.twitter.com')} src={assets.twitter_icon} alt="" />
                    <img onClick={() => window.open('https://www.linkedin.com')} src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li onClick={() => window.open('https://www.gmail.com')}>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All rights reserved.</p>
    </div>
  )
}

export default Footer
