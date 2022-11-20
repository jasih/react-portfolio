import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {IoLocationSharp} from 'react-icons/io5'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tqzj497', 'template_wkxbfhx', form.current, 'Y2IewrKwE_npSnLHo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
        <article className="contact__option">
            <IoLocationSharp className='contact__option-icon'/>
            <h4>Location</h4>
            <h5 style={{display:'inline-block', marginTop:'0.7rem', color:'var(--color-primary)', fontFamily:'inherit', fontSize:'0.8rem', fontWeight:400}}>Memphis, Tennessee</h5>
          </article>
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>janetsihapanya@gmail.com</h5>
            <a href="mailto:janetsihapnya@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Janet Sihapanya</h5>
            <a href="https://www.linkedin.com/in/janet-sihapanya-b03102199/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='YOUR NAME' required />
          <input type="email" name='email' placeholder='YOUR EMAIL' required />
          <input type="subject" name='subject' placeholder='ENTER SUBJECT' required />
          <textarea name="message" rows='7' placeholder='Message Here...' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact