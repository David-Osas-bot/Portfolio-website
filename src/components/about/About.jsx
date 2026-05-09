import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { LuUsers } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="About_Image" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about_card'>
              <LuUsers className='about_icon' />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>90+ Completed</small>
            </article>
          </div>

          <p>
            Result-driven Full Stack Developer with 2 years of hands-on experience building scalable and responsive web
            applications using languages like PHP, HTML, CSS, JavaScript, and Frameworks like React, Laravel and Tailwind CSS. Strong ability to develop both frontend and
            backend systems, and manage database-driven applications. Passionate about writing clean,
            maintainable code and improving system performance and user experience in real-world
            production environments.          
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
