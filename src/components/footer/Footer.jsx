import React from 'react'
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Aituayuwa David Osas</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><CgInstagram /></a>
        <a href="https://twitter.com"><FaXTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Aituayuwa David Osas. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
