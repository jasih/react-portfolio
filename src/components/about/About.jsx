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
            Hi, I'm Janet and I graduated from the University of Memphis with a bachelors in Computer Science.
            Throughout my studies, academic clubs such as the ACM (Association for Computing Machinery), and through my 
            Full Stack Development program at Cook Systems, I have gained experience in working with a team through agile/scrum methodologies, 
            as well as having experience in concentrated Java frameworks, SQL databases, and developing web applications using Spring, React, 
            HTML/CSS, and Javascript. With the help of many great developers who later became lifelong friends, I also gained the knowledge
            and ability to adapt, develop and hone my skills in programming, and gained the confidence to see myself as a software developer.
            I am a passionate learner who uses technology as a tool for success.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About