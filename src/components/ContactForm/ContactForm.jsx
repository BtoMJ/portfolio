import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import './ContactForm.css';
// import { data } from "react-router-dom";

const ContactForm = () => {

    useEffect(()=>{
        focus();
    }, [])

    const form = useRef();

    const notifyOk = () => {
        toast.success("Datos enviados correctamente", {
            autoClose: 2000,
            hideProgressBar : false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            icon : true
        });
    };
    
    const focus = () => {
        const inputName = document.getElementById("name");
        inputName.value = "";
        inputName.focus();
    }

    const cleanFocus = () => {
        const inputEmail = document.getElementById("email");
        inputEmail.value = "";
        const Message = document.getElementById("message");
        Message.value = "";
        focus();
    }

    const sendEmail = (e) => {

        e.preventDefault();
    
        emailjs
          .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                    publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
          })
          .then(
            () => {
              console.log('SUCCESS!');
              notifyOk();
              cleanFocus();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };

    return(
        <div className="contact-form-container">

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" id="name" required/>
                <label>Email</label>
                <input type="email" name="email" id="email" required/>
                <label>Message</label>
                <textarea name="message" id="message" required/>
                <div className="btn-form-container">
                    <button type="button" onClick={cleanFocus}>Limpiar</button>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <ToastContainer />

        </div>
    )
}

export default ContactForm;