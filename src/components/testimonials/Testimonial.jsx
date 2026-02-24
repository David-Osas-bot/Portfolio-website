import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jfif'
import AVTR2 from '../../assets/avatar2.jfif'
import AVTR3 from '../../assets/avatar3.jfif'
import AVTR4 from '../../assets/avatar4.jfif'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Mr. Kelvin Bassey",
    review: `Working with this developer was an excellent experience from the start of the project.
            They clearly understood our requirements and delivered a clean, responsive, and well- structured solution.
            The final result was professional, reliable, and exceeded our expectations.`
  },

  {
    avatar: AVTR2,
    name: "Mr. Louis Adeyemi",
    review: `The developer showed strong attention to detail throughout the entire development process.
              Performance, usability, and code quality were clearly prioritized at every stage.
              We were impressed by how smoothly everything was delivered and maintained.`
  },

  {
    avatar: AVTR3,
    name: "Mr. Williams Mark",
    review: `Communication was consistent, clear, and focused on finding the best solutions.
              Feedback and changes were handled quickly without any drop in quality.
              The overall workflow felt efficient, collaborative, and stress-free.`
  },

  {
    avatar: AVTR4,
    name: "Mrs. Felicia Amalu",
    review: `This developer demonstrated strong problem-solving skills and technical expertise.
              They went beyond the basic requirements to improve functionality and user experience.
              The added value made a noticeable difference in the final product.`
  },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
       
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
      
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>

                <h5 className='client_name'>{name}</h5>

                <small>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
