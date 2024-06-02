import { Icon } from '@iconify/react';

const Template = () => {
    return(

        <div className="
                  aboutMe
                  flex
                  flex-column
                  justify-content-center
                  align-items-center
                  px20
                  ">

        <img src='../../images/about.png' alt='about' className='mb20'/>

        <fieldset className='p30 firstField'>
          <legend>About Me</legend>

          <code id="pitch">
            I'm a web developer working at the moment for a small company as a full-stack developer, using AngularJS in the frontend, PHP in the backend, and MySQL as the database. I have a Master's degree in chemical engineering and used to work in water treatment and Refrigeration Systems with ammonia. However, because I wasn't getting any satisfaction in this line of work, I decided to apply to the Ironhack bootcamp and learn web development and change my career. During this time at the bootcamp, I learned to program with JavaScript, CSS, HTML, ReactJS, NodeJS/ExpressJS, and MongoDB.
          </code>

        </fieldset>

        <fieldset className='py20 px30'>
          <legend>Skillset</legend>

          <code id="skills">
            <span>
              Front-End: &nbsp;
              <span><i className="fa-brands fa-html5"></i>HTML5 </span>
              <span><i className="fa-brands fa-css3-alt"></i>CSS3 </span>
              <span><i className="fa-brands fa-js"></i>Javascript </span>
              <span><Icon icon="simple-icons:typescript" />Typescript </span>
              <span><i className="fa-brands fa-react"></i>ReactJS/NextJS </span>
            </span><br/><br/>

            <span>
              Back-End: &nbsp;
              <span><i className="fa-brands fa-node-js"></i>NodeJS/ExpressJS </span>
              <span><i class="fa-brands fa-php"></i>PHP </span>
              <span><i class="fa-brands fa-python"></i>Python/Django </span>
            </span><br/><br/>

            <span>
              Data Base: &nbsp;
              <span><Icon icon="simple-icons:mongodb" />MongoDB </span>
              <span><Icon icon="devicon-plain:mysql" />MySQL </span>
            </span>
          </code>

        </fieldset>

        <div className="extraList">

          <fieldset className='py15 px30'>
            <legend>Hobbies</legend>

            <code>
                <p>Gym workout</p>
                <p>PC Gaming</p>
            </code>

          </fieldset>

          <fieldset id="contacts" className='py20 px30'>
            <legend>Contacts</legend>

            <code>
              Email: <a href="mailto:eurico_moutinho@yahoo.co.uk" data-content="eurico_moutinho@yahoo.co.uk">eurico_moutinho@yahoo.co.uk</a>
            </code>

          </fieldset>

        </div>
          
      </div>

    );
}

export default Template;