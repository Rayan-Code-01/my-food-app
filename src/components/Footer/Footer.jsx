import "./Footer.css"


import { assets } from "../../assets/assets"

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>Code Bless Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo maxime ipsa! Nisi consectetur, nam totam modi sunt quos ut, accusamus, labore facilis laudantium voluptatibus praesentium quia ipsum pariatur temporibus?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="fb" />
            <img src={assets.twitter_icon} alt="fb" />
            <img src={assets.linkedin_icon} alt="fb" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977 19000 19000</li>
            <li>contact@gmail.com</li>
          </ul>

        </div>
      </div>
      <hr />
      <div className="footer-copyright">  &copy; Copyright 2025 Code Bless Me</div>
    </div>
  )
}

export default Footer