import React from 'react'
import about_img from '../../assets/about.png'
import play from '../../assets/play-icon.png'
import './About.css'
const About = () => {

  return (
    <div className="about">
        <div className="about-left">
    <img src={about_img} alt="" className="about-img "/>
    <img src={play} alt="" className="play-img "/>
        </div>

        <div className="about-right">
         <h3>ABOUT UNIVERSITY</h3>
         <h2>Nurturing Tomorrow's Leaders Today</h2>
         <p>
                Our university is dedicated to providing quality education and fostering innovative research. We offer a wide range of programs and opportunities for students to excel and achieve their academic and career goals. Join us to be a part of a vibrant and inclusive academic community.
            </p>
            <p >
                Our faculty consists of world-renowned scholars and industry leaders who are committed to mentoring and guiding students. We encourage a collaborative learning environment where students can engage in interdisciplinary projects and research.
            </p>
            <p >
                Beyond academics, we offer a rich campus life with various extracurricular activities, clubs, and organizations. Our state-of-the-art facilities provide the perfect setting for students to explore their interests and develop new skills.
            </p>
    
        </div>
    </div>
  )
  
}
export default About