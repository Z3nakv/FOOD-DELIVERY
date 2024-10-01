import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { StoreContext } from '../../context/StoreContext';
import SearchBar from '../SearchBar/SearchBar';
import { FaBars } from "react-icons/fa";

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("menu");
    const [visible, setVisible] = useState(false);
    const { getTotalCartAmount, token, setToken, setShowSearch, setShowSlideBar } = useContext( StoreContext );

    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken("");
        navigate("/");
    }

    useEffect(() => {
        if(location.pathname.endsWith('/')){
            setVisible(true);
            setShowSlideBar(false)
        }
        else {
            setVisible(false);
        }
    },[location])

  return (
    <div className="navbar-container">
        <div className='navbar'>
            <Link className='title' to='/'>
                FoodiFy
            </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu==="home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className='navbar-right'>
                {location.pathname.endsWith('/') && <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="" />}
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                {!token
                ? <button onClick={() => setShowLogin(true)}>sign in</button>
                :
                <div className="navbar-profile">
                    <img src={assets.profile_icon} alt="" />
                    <ul className="nav-profile-dropdown">
                        <li onClick={()=>navigate("/myorders")}><img src={assets.bag_icon} alt="" />Orders</li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
                    </ul>
                </div>
                }
                {
                    token && localStorage.getItem('user') === 'Admin' && <button onClick={()=>window.open('https://food-delivery-admin-vh4t.onrender.com/')}>Admin panel</button>
                }
                {
                    location.pathname.endsWith('/') &&
                    <div 
                    className='display-menu-bar'
                    onClick={() => setShowSlideBar(true)}
                    >
                        <FaBars />
                    </div>
                }
                {
                    
                    <SearchBar visible={visible} />
                    
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar
