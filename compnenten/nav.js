import img from '../img/logo.png'
import React from 'react';
import { FaFacebook ,FaGithub} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa6";

function Header() {
    return (
       <header>
         <img src={img} alt="Logo" />
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#span_title">About</a></li>
            <li><a href="/">Skills</a></li>
            <li><a href="/">Porject</a></li>
         </ul>
         <div className='contact-icon'>
         <a className='contact-icon1' href='https://nl-nl.facebook.com/'><FaFacebook className='contact-icon1'/></a>
         <a className='contact-icon1' href='https://github.com/husseinomar19?tab=repositories'><FaGithub className='contact-icon1'/></a>
         <a className='contact-icon1' href='https://www.linkedin.com/in/hussen-omer-103472218/'><FaLinkedin className='contact-icon1'/></a>
         </div>
       </header>
    );
}
export default Header;