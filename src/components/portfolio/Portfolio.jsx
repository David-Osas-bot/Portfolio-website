import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [

  {
    id: 1,
    title: "A Fully Functional Cryptocurrency website",
    image: IMG1,
    github: "https://github.com/David-Osas-bot",
    demo: "https://coincore-bay.vercel.app/"
  },

  {
    id: 2,
    title: "A Complete E-commerce Platform",
    image: IMG2,
    github: "https://github.com/David-Osas-bot",
    demo: "https://g-shopping.iceiy.com/ecommerceweb2/Admin/user/index.php?i=1#"
  },

  {
    id: 3,
    title: "A Modern Unique Portfolio Website",
    image: IMG3,
    github: "https://github.com/David-Osas-bot",
  demo: "https://nwankpele.vercel.app"
  },

  {
    id: 4,
    title: "Pop Culture. Music. Movies. All in One Place.",
    image: IMG4,
    github: "https://github.com/David-Osas-bot",
    demo: "https://jne-pied.vercel.app/"
  },


  {
    id: 5,
    title: "A Scalable Fitness Website Built for Growth",
    image: IMG5,
    github: "https://github.com/David-Osas-bot",
    demo: "https://gymnastics-website.vercel.app/"
  },

  {
    id: 6,
    title: "A Frontend-Focused E-commerce Website",
    image: IMG6,
    github: "https://github.com/David-Osas-bot",
    demo: "https://ecommerce-frontend-sable-phi.vercel.app/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}


export default Portfolio
