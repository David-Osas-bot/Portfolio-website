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
              <small>4+ Years Working</small>
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
            Result-driven full-stack developer with 4+ years of experience 
            building scalable and dynamic web applications using React, HTML5, 
            CSS3, JavaScript, PHP, Nodejs, and Laravel(PHP).
            Skilledin both Frontend and Backend development, with a strong foundation in database design,
            API integration, and cloud deployment. Passionates about building solutions that enhance performance and user experience.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
