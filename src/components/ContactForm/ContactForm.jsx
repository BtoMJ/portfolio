import { useForm } from "react-hook-form";
import './ContactForm.css';

const ContactForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleClearClick = () => {
        reset();
    }

    const handleSubmitForm = (data) => {
       console.log(data)
    }

    console.log(errors)

    return(
        <div className="contact-form-container">
            
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label>
                    Nombre
                    <input {...register('name', { required:true })}  />
                </label>
                <br />
                <br />
                <label>
                    Email
                    <input {...register('email', { required:true })}  />
                </label>
                <br />
                <br />
                <label>
                    Mensaje
                    <textarea {...register('msg', { required:true })}  />
                </label>
                <br />
                <div className="btn-form-container">
                    <button type="button" onClick={handleClearClick}>Limpiar</button>
                    <button type="submit">Enviar</button>
                </div>
            </form>

        </div>
    )
}

export default ContactForm;