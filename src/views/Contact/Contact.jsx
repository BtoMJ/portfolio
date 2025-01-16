import NavBar from '../../components/NavBar/Navbar.jsx';
import './Contact.css';

const Contact = () => {
    return(
        <>

            <div className='navbar-container'>
                <NavBar active="contact"/>
            </div>

            <div className="contact-container">
                Contacto
            </div>

        </>
    )
}

export default Contact;