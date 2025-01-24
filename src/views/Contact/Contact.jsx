import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import NavBar from '../../components/NavBar/Navbar.jsx';
import './Contact.css';

const Contact = () => {
    return(
        <>
            <div className='navbar-container'>
                <NavBar active="contact"/>
            </div>

            <div className="contact-container">
                <h2>¿Tienes un proyecto en mente?</h2>
                <p className='contact-text'>
                    Estoy aquí para ayudarte a dar vida a tus ideas. <br/>
                    Llena el formulario y me contactaré contigo. ¡Hablemos!
                </p>
                <ContactForm />
            </div>

        </>
    )
}

export default Contact;