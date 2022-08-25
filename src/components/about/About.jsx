import React from 'react'
import './about.css'
import ME from '../../assets/face.png'


const About = () => {
  return (
    <section id='about'>
     
     <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
         <p>
         I am a Full Stack Web Developer with a background in sales and social media marketing. I am a recent graduate from the University of Washington Bootcamp where I learned different languages like Javascript(React), HtTML, CSS, SQL to name a few, which combined with my past experience has helped me to build real world MERN applications. It has also allowed me to collaborate with fellow students, mentors in the program to work on a few other projects. I aim to bring an artistic eye with an underlying understanding of code and development to life high-quality web experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About