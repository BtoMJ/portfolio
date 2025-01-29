// import { useState, forwardRef, useImperativeHandle } from "react";
import { useState } from "react";
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaBars, FaWhatsapp  } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './Navbar.css';

const NavBar = ( { active } ) => {

    const [ hide, setHide ] = useState(true);

    const hideMenu = () => {
        setHide((hide) => !hide)
    }

    return(
        <div className="nav-menu" >

            <div className="nav-mobile">
                <FaBars className="menu-mobile-icon" onClick={hideMenu}/>
                <img src={logo} alt='logo-dev' />
            </div>

            <div className={ hide === true ? "nav-mobile-options-hide" : "nav-mobile-options"}>
                <div className="items-menu-mobile">
                    <p onClick={hideMenu} className="close-mobile-menu">x</p>
                    <p><Link to="/" className="link">home</Link></p>
                    <p><Link to="/design" className="link">diseño</Link></p>
                    <p><Link to="/web" className="link"> desarrollo</Link></p>
                    <p><Link to="/contact" className="link">contacto</Link></p>
                </div>

                <div className='social-container-mobile'>
                    <a href="https://www.behance.net/danielMena17" target="_blank">
                        <FaBehance className='icon-social-1'/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61553164706670" target="_blank">
                        <FaFacebookF className='icon-social-2'/>
                    </a>
                    <a href="https://www.instagram.com/danielo_mena/" target="_blank">
                        <FaInstagram className='icon-social-2'/>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-mena-jaime/" target="_blank">
                        <FaLinkedinIn className='icon-social-1'/>
                    </a>
                    <a href="https://wa.me/524761037311" target="_blank">
                        <FaWhatsapp className='icon-social-1'/>
                    </a>
                </div>
            </div>

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
                <a href="https://www.facebook.com/profile.php?id=61553164706670" target="_blank">
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