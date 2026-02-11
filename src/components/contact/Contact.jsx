import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
// import { useRef } from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);


  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_qqy4mpn', 'template_shzvvi7', form.current, {
  //       publicKey: '7-nccnJpD3ghQf0fG',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs
      .sendForm('service_qqy4mpn', 'template_shzvvi7', form.current, {
        publicKey: '7-nccnJpD3ghQf0fG',
      })
      .then(() => {
        setStatus('success');
        setLoading(false);
        form.current.reset(); // clear form
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        setStatus('error');
        setLoading(false);
      });
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMailOutline className='contact_option-icon' />
            <h4>Email</h4>
            <h5>davidosas011gmail.com</h5>
            <a href="mailto:davidosas011@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <ImWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+2348081677861</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348081677861" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>David Osas</h5>
            <a href="https://m.me/davidosas" target='_blank'></a>
            {/* <a href="https://web.facebook.com/profile.php?id=61579817163974">Send a message</a> */}
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Full Name' required />
          <input type="email" name='email' placeholder='Enter Email' required />
          <textarea name="message" rows="7" placeholder='Enter Message' required></textarea>
          {/* <button type='submit' className='btn btn-primary'>Send message</button> */}

          <button type='submit' className='btn btn-primary' disabled={loading}>
            {loading ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="success-msg">Message sent successfully...</p>
          )}

          {status === 'error' && (
            <p className="error-msg">Failed to send message</p>
          )}

        </form>
      </div>
    </section>
  )
}

export default Contact
