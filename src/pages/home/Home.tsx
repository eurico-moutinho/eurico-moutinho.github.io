import React, { useEffect } from 'react';
import './Home.sass'

const Home: React.FC = () => {

  useEffect(() => {

    const paragraphs = document.querySelectorAll('.typewriter');
    let delay = 0;

    paragraphs.forEach((p) => {

      const paragraph = p as HTMLElement;
      paragraph.style.animationDelay = delay + 's';
      delay += 1.5;

    });

  }, []);

  useEffect(() => {

    const paragraphs2 = document.querySelectorAll('.typewriter2');
    let delay = 0;

    paragraphs2.forEach((p) => {

      const paragraph2 = p as HTMLElement;
      paragraph2.style.animationDelay = delay + 's';
      delay += 1.5;

    });

  }, []);

  return (
    <>
    <div id="profile" className="flex flex-column justify-content-center align-items-center">
      <h1 className="mb50 ml20 mt-xsm80 mt-sm80">Hi,<span><br/></span>welcome to my corner of the internet</h1>
      <div className="flex justify-content-evenly align-items-center flex-wrap subpro">
        <div id="description">
          <code className="p30">
            <p className="typewriter"><span className="obj">Name</span> = &#123;</p>
            <br/>
            <p className="variables typewriter ml15 mr80 mr-sm40 mr-xsm20"><span>Firstname:</span> 'Eurico',</p>
            <p className="variables typewriter ml15"><span>Middlename:</span> 'Yung',</p>
            <p className="variables typewriter ml15"><span>Lastname:</span> 'Moutinho'</p>
            <br/>
            <p className="typewriter">&#125;;</p>
          </code>
          <code className="p30 ml100 ml-sm50 ml-xsm0">
            <p className="typewriter2"><span className="obj">What_am_I</span> = &#123;</p>
            <br/>
            <p className="variables typewriter2 ml15 mr80 mr-sm40 mr-xsm20"><span>Profession:</span> 'Web Developer',</p>
            <p className="variables typewriter2 ml15"><span>Nationality:</span> 'Portuguese',</p>
            <p className="variables typewriter2 ml15"><span>Education:</span> 'Master degree'</p>
            <br/>
            <p className="typewriter2">&#125;;</p>
          </code>
        </div>
        <img src="../../images/photo-no-background.png" alt="profile" className="mx50 mb50"/>
      </div>
    </div>
    </>
  );
}

export default Home;