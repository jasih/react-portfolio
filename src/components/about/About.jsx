import React from 'react'
import './about.css'
import ME from '../../assets/pfp.jpg'
import {BsCodeSlash} from 'react-icons/bs'
import {FaAward} from 'react-icons/fa'
import {GoGraph} from 'react-icons/go'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GoGraph className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ Years</small>
            </article>
            <article className='about__card'>
              <BsCodeSlash className='about__icon' />
              <h5>Technologies</h5>
              <small>15+ Learned</small>
            </article>
          </div>

          <p>
            Hi, I'm Janet and I graduated from the University of Memphis in December of 2021 with a bachelors in Computer Science.
            Originally starting out as an art major, I've always wanted to take my artistic abilities to the next level. At an early age,
            I was always inspired by animes I watched with my cousins. And during that time, my interest in technology
            grew when my uncle bought me my first Dell laptop. I remember playing Minecraft, watching youtube, or even just browsing
            the Internet together with my family. Since then, I transitioned into computer science after one of my cousins told me it 
            would be a great opportunity for me since there weren't many women in this field. So, I took him up on that offer and decided to 
            delve into the world of tech. I later joined his club called the Association for Computing Machinery or the ACM for short. There, 
            I met many great developers who helped me learn the fundamentals of Java and Python, and we also particated in a hackathon together. 
            And so, as I continued my journey in tech, my love for software development grew, and I got into a Full Stack Development program at CookSystems,
            which helped me develop skills such as learning new technologies and even how to act in a professional setting. Now, after having
            many great opportunities and experiences, I've been developing my skills and chasing my passions even further.  
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About