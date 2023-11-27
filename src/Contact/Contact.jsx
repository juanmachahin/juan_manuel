import React, {useRef} from 'react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const refForm = useRef();
  const phoneNumber = '59175552835';
  const message = 'Hola%20necesito%20más%20información';
  const email = 'juanma.chahin@gmail.com'; // Reemplaza esto con tu correo de Gmail
  const linkedIn = 'juanma-chahin'; // Reemplaza esto con tu perfil de LinkedIn

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refForm, refForm.current);

    const serviceId = "service_s04ut4j";
    const templateId = "template_8aknz92";
    //3er parámetro
    const apiKey = "lj_6vS6mLux7j0rf6";
    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
    .then( result => console.log(result.text))
    .catch( error => console.log(error))
   
  }
    return (
        <>
        <form ref={refForm} action='' onSubmit={handleSubmit}>
            
            <div className='header-contact'>
                <h2>Contact Me</h2>
                <p>Please fill this form</p>
                <fieldset className='field-name'>
                    <label className='symbol-required name' htmlFor=''>Name</label>
                    <input name='username' type='text' placeholder='Ex: Juan Manuel' required />
                </fieldset>
                <fieldset className='field-email'>
                    <label className='symbol-required email' name="email">Email</label>
                    <input placeholder='Ex: juanma.chahin@gmail.com' type='email' name='email' id='email' required />
                </fieldset>
                <fieldset className='field-message message'>
                    <label className='symbol-required'>Message</label>
                    <textarea maxLength="500" placeholder='type your message' name='message' id='type-message' cols="30" />
                </fieldset>
            </div>
         <button className='btn-send'>Send</button>
        </form>
         <footer className='contact'>
         <article className='contactme'>
            <div className='contactMenu'>
         <p className='whatsapp'>
             <a href={`https://wa.me/${phoneNumber}/?text=${message}`} target='_blank'>
                 <FaWhatsapp size={22} className='icon' />
             </a>
         </p>
         <p className='email'>
             <a href={`mailto:${email}`} className='icon'>
                 <AiOutlineMail size={22} />
             </a> 
         </p>
         <p className='linkedin'>
             <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer">
                 <FaLinkedin size={22} className='icon' />
             </a> 
         </p>
         </div>
         </article>
         </footer>
         </>
    );
}


export default Contact;
