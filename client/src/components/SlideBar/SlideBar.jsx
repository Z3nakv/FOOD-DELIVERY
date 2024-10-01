import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import "./SlideBar.css";
import { StoreContext } from "../../context/StoreContext";

const SlideBar = () => {
  const [menu, setMenu] = useState("menu");
  const slideRef = useRef(null);
  const { setShowSlideBar, showSlideBar } = useContext( StoreContext );
  return (
    <div className={`slideBar-container ${showSlideBar ? 'active' : ''}`}>
    <div className="bg"></div>
    <div className='slideBar-menu'>
        <div 
        className="close"
        onClick={() => setShowSlideBar(false)}
        >
            x
        </div>
      <ul>
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
    </div>
    </div>
  );
};

export default SlideBar;
