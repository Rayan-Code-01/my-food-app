import React, { useState } from 'react'
import "./Navbar.css";
import {assets} from "../../assets/assets"
import { Link } from "react-router-dom";

const Navbar = ({setshowLogin}) => {
  const [menu,setMenu]=useState('home')
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1>code bless me</h1>
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link to={"/"} onClick={()=>setMenu('home')} className={menu === "home" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <a href="#explore-menu" onClick={()=>setMenu('explore-menu')} className={menu === "explore-menu" ? "active" : ""}>menu</a>
        </li>
        <li>
          <a href="#app-download" onClick={()=>setMenu('mobile-app')} className={menu === "mobile-app" ? "active" : ""}>mobile app</a>
        </li>
        <li>
        <a href="#footer" onClick={()=>setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>contact us</a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />

        <div className="navbar-search-icon">
          <Link to={'/cart'}>
          <img src={assets.basket_icon} alt="basket-icon" />
          </Link>
        </div>
      <button onClick={() => setshowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar