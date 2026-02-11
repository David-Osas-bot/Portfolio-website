import React from 'react'
import './service.css';
import { FaCheck } from "react-icons/fa6";

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className="service">
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FaCheck className='service_list-icon' />
              <p>
                I design intuitive, user-centered interfaces that focus on clarity,
                usability, and visual appeal. My goal is to create seamless digital
                experiences that feel natural and engaging for users.
              </p>
            </li>

            <li>
              <FaCheck className='service_list-icon' />
              <p>
                I craft thoughtful UI/UX designs that balance aesthetics with 
                functionality. By understanding user behavior, I transform 
                complex ideas into simple, effective, and enjoyable experiences.
              </p>
            </li>

            <li>
              <FaCheck className='service_list-icon' />
              <p>
                I specialize in designing user-friendly interfaces that improve 
                interaction and satisfaction. Every design decision is driven 
                by usability, accessibility, and real user needs.
              </p>
            </li>
          </ul>
        </article>

        {/* ======================= END OF UI/UX ======================= */}

        <article className="service">
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FaCheck className='service_list-icon' />
              <p>
               I build responsive and high-performance websites that are fast, 
               secure, and scalable. My focus is on clean code and modern 
               technologies to deliver reliable digital solutions.
              </p>
            </li>

            <li>
              <FaCheck className='service_list-icon' />
              <p>
                I develop modern web applications with a strong emphasis 
                on performance and user experience. From landing pages 
                to full web apps, I bring ideas to life on the web.
              </p>
            </li>

            <li>
              <FaCheck className='service_list-icon' />
              <p>
               I create functional, responsive websites tailored to your 
               needs. My development approach ensures cross-device compatibility and smooth user interactions.
              </p>
            </li>
          </ul>
        </article>

        {/* ======================= END OF WEB DEVELOPMENT ======================= */}

        <article className="service">
          <div className='service_head'>
            <h3>Graphic Designer</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FaCheck className='service_list-icon' />
              <p>
               I create visually compelling designs that communicate 
               your brand message clearly. From logos to marketing 
               materials, I focus on creativity and consistency.
              </p>
            </li>

            <li>
              <FaCheck className='service_list-icon' />
              <p>
                I design eye-catching graphics that enhance brand 
                identity and engagement. My work combines creativity 
                with strategic thinking to deliver impactful visuals.
              </p>
            </li>

            <li>
              <FaCheck className='service_list-icon' />
              <p>
                I specialize in creating clean, modern graphic designs 
                that capture attention and tell a story. Every design 
                is crafted to leave a lasting impression.
              </p>
            </li>
          </ul>
        </article>

        {/* ======================= END OF CONTENT CREATION ======================= */}
      </div>
    </section>
  )
}

export default Service
