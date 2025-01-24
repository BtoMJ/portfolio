// import { useState, forwardRef, useImperativeHandle } from "react";
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './Navbar.css';

const NavBar = ( { active } ) => {

    return(
        <div className="nav-menu" >

            <div className='type-work'>
                <p><Link to="/design" className={active === "design" ? "active" : "link"}>diseño</Link></p>
                <p><Link to="/web" className={active === "web" ? "active" : "link"}> desarrollo</Link></p>
                <p><Link to="/contact" className={active === "contact" ? "active" : "link"}>contacto</Link></p>
            </div>
            <div className='logo-container'>
                <Link to="/"><img src={logo} alt='logo-dev' /></Link> 
            </div>
            <div className='social-container'>
                <a href="https://www.behance.net/danielMena17" target="_blank">
                    <FaBehance className='icon-social-1'/>
                </a>
                <a href="" target="_blank">
                    <FaFacebookF className='icon-social-2'/>
                </a>
                <a href="https://www.instagram.com/danielo_mena/" target="_blank">
                    <FaInstagram className='icon-social-2'/>
                </a>
                <a href="https://www.linkedin.com/in/daniel-mena-jaime/" target="_blank">
                    <FaLinkedinIn className='icon-social-1'/>
                </a>
            </div>
         
        </div>
    )
}


export default NavBar;