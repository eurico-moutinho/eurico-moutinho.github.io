import React from 'react'
import { NavLink } from 'react-router-dom';
import './PieControl.sass'

const PieControl = () => {
    return (

      <main className="pieContainer mobile-hidden tablet-hidden">

        <div className="pieButton flex flex-column justify-content-center align-items-center">
            <span>M</span><span>e</span><span>n</span><span>u</span>
        </div>

        <ul className="pieMenu flex flex-column justify-content-center">

          <li className='slice flex justify-content-end'>
            <a href="https://twitter.com/YuriYung" target="_blank" rel="noreferrer" title="Twitter" className="flex justify-content-center align-items-center">
                <i className="fa-brands fa-twitter fa-fw fa-xl"></i>
            </a>
          </li>

          <li className='slice flex justify-content-end'>
            <a href="https://www.linkedin.com/in/eurico-yung-moutinho/" target="_blank" rel="noreferrer" title="Linkedin" className="flex justify-content-center align-items-center">
              <i className="fa-brands fa-linkedin fa-fw fa-xl"></i>
            </a>
          </li>

          <li className='slice flex justify-content-end'>
            <NavLink to="/" title="Home" className="flex justify-content-center align-items-center">
              <i className="fa-solid fa-house fa-fw fa-xl"></i>
            </NavLink>
          </li>

          <li className='slice flex justify-content-end'>
            <NavLink to="/projects" title="Projects" className="flex justify-content-center align-items-center">
              <i className="fa-solid fa-briefcase fa-fw fa-xl"></i>
            </NavLink>
          </li>

          <li className='slice flex justify-content-end'>
            <NavLink to="/about" title="About me" className="flex justify-content-center align-items-center">
              <i className="fa-regular fa-address-card fa-fw fa-xl"></i>
            </NavLink>
          </li>

          <li className='slice flex justify-content-end'>
            <a href="https://github.com/eurico-moutinho" target="_blank" rel="noreferrer" title="Github" className="flex justify-content-center align-items-center">
              <i className="fa-brands fa-github fa-fw fa-xl"></i>
            </a>
          </li>

        </ul>

      </main>

    );
  }
  
  export default PieControl;
