import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/quizler.png'
import IMG2 from '../../assets/schema_design.png'
import IMG3 from '../../assets/twitter_api.png'
import IMG4 from '../../assets/spotify_api.png'
import IMG5 from '../../assets/project_man.png'
import IMG6 from '../../assets/react_portfolio.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Quizler',
    github: 'https://github.com/jasih/quizler'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Schema Design',
    github: 'https://github.com/jasih/schema-design'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Twitter API',
    github: 'https://github.com/jasih/social-media-api'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Spotify Guessing Game',
    github: 'https://github.com/jasih/spotify-guessing-game',
    demo: 'https://spotify-game.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project Management App',
    github: 'https://github.com/jasih/project-management-app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'React Portfolio',
    github: 'https://github.com/jasih/react-portfolio'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
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