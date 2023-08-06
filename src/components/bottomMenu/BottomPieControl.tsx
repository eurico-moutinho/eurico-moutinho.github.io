import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import './BottomPieControl.sass'

const BottomPieControl: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);
  
    const handleControlClick = (): void => {

      setIsExpanded(!isExpanded);

    };

    const handleClickOutside = (event: MouseEvent): void => {

        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {

          setIsExpanded(false);

        }
      };

    useEffect(() => {

        document.addEventListener('click', handleClickOutside);

        return () => {

            document.removeEventListener('click', handleClickOutside);
            
        };
    }, []);
    
    return (

      <main className="bottomContainer laptop-hidden smallScreen-hidden desktop-hidden">

        <div className="BottomPieControl flex justify-content-center align-items-center" onClick={handleControlClick}  ref={menuRef}>
            <i className="fa-solid fa-bars fa-xl"></i>
        </div>

        <ul className="bottomMenu">

            <li className={`choice flex justify-content-end ${isExpanded ? 'expanded' : ''}`}>
                <a href="https://twitter.com/YuriYung" target="_blank" rel="noreferrer" title="Twitter" className="flex justify-content-center align-items-center" onClick={handleControlClick}>
                    <i className="fa-brands fa-x-twitter fa-fw fa-xl"></i>
                </a>                
            </li>

            <li className={`choice flex justify-content-end ${isExpanded ? 'expanded' : ''}`}>
                <a href="https://www.linkedin.com/in/eurico-yung-moutinho/" target="_blank" rel="noreferrer" title="Linkedin" className="flex justify-content-center align-items-center" onClick={handleControlClick}>
                    <i className="fa-brands fa-linkedin fa-fw fa-xl"></i>
                </a>
            </li>

            <li className={`choice flex justify-content-end ${isExpanded ? 'expanded' : ''}`}>
                <NavLink to="/" title="Home" className="flex justify-content-center align-items-center" onClick={handleControlClick}>
                    <i className="fa-solid fa-house fa-fw fa-xl"></i>
                </NavLink>
            </li>

            <li className={`choice flex justify-content-end ${isExpanded ? 'expanded' : ''}`}>
                <NavLink to="/projects" title="Projects" className="flex justify-content-center align-items-center" onClick={handleControlClick}>
                    <i className="fa-solid fa-briefcase fa-fw fa-xl"></i>
                </NavLink>
            </li>

            <li className={`choice flex justify-content-end ${isExpanded ? 'expanded' : ''}`}>
                <NavLink to="/about" title="About me" className="flex justify-content-center align-items-center" onClick={handleControlClick}>
                    <i className="fa-regular fa-address-card fa-fw fa-xl"></i>
                </NavLink>
            </li>

            <li className={`choice flex justify-content-end ${isExpanded ? 'expanded' : ''}`}>
                <a href="https://github.com/eurico-moutinho" target="_blank" rel="noreferrer" title="Github" className="flex justify-content-center align-items-center" onClick={handleControlClick}>
                    <i className="fa-brands fa-github fa-fw fa-xl"></i>
                </a>
            </li>

        </ul>

      </main>

    );
  }
  
  export default BottomPieControl;