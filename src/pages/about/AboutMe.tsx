import React from 'react'
import './AboutMe.sass'
import { Icon } from '@iconify/react';
import AnimatedPage from '../../components/animatedPage/AnimatedPage';

const AboutMe = () => {
  return (
    <AnimatedPage>
      <div className="aboutMe flex flex-column justify-content-center align-items-center">

        <img src='../../images/about.png' alt='about' className='mb20'/>

        <fieldset className='p30 firstField mx20'>
          <legend>About Me</legend>

          <code id="pitch">
            I'm a web developer working at the moment for a small company as a full-stack developer, using AngularJS in the frontend, PHP in the backend, and MySQL as the database. I have a Master's degree in chemical engineering and used to work in water treatment and Refrigeration Systems with ammonia. However, because I wasn't getting any satisfaction in this line of work, I decided to apply to the Ironhack bootcamp and learn web development and change my career. During this time at the bootcamp, I learned to program with JavaScript, CSS, HTML, ReactJS, NodeJS/ExpressJS, and MongoDB.
          </code>

        </fieldset>

        <div className="extraList mt25 mx20">

          <fieldset className='p20'>
            <legend>Skillset</legend>

            <code>
              <span><i className="fa-brands fa-html5"></i>HTML5 </span>
              <span><i className="fa-brands fa-css3-alt"></i>CSS3 </span>
              <span><i className="fa-brands fa-js"></i>Javascript </span>
              <span><i className="fa-brands fa-react"></i>ReactJS </span>
              <span><Icon icon="simple-icons:mongodb" />MongoDB </span>
              <span><i className="fa-brands fa-node-js"></i>NodeJS/ExpressJS </span>
              <span><Icon icon="simple-icons:typescript" />Typescript </span>
            </code>

          </fieldset>

          <fieldset className='p30'>
            <legend>Hobbies</legend>

            <code>
                <p>Gym workout</p>
                <p>PC Gaming</p>
            </code>

          </fieldset>

        </div>

        <fieldset id="contacts" className='p30 mt30'>
          <legend>Contacts</legend>

          <code>
            Email: <a href="mailto:eurico_moutinho@yahoo.co.uk">eurico_moutinho@yahoo.co.uk</a>
          </code>

        </fieldset>
          
      </div>
    </AnimatedPage>
  )
}

export default AboutMe