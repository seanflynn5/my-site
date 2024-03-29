import { useState } from 'react';
import { Link } from 'react-router-dom';
import seanPhoto from './assets/sean-photo.png';
import violaImg from './assets/viola.png';
import MyNavbar from './MyNavbar.tsx';
import ExperienceModal from './ExperienceModal.tsx';
import ProjectModal from './ProjectsModal.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marquee from "react-fast-marquee";
import './App.css';

function HomePage(): JSX.Element {
  const [expModalShow, setExpModalShow] = useState(false);
  const [projModalShow, setProjModalShow] = useState(false);

  return (
    <>
      <MyNavbar />
      <div id='main-content'>
        <h1 id='sean-text'>Sean Flynn</h1>
        <div>
          <img src={seanPhoto} className="photo" alt="Photo of Sean Flynn" />
        </div>
        <h3><i>Software Engineer</i></h3>
        <p className="intro">
          Hi! 👋  I'm Sean, a software engineer with experience in fullstack development. I currently work at <a href='https://www.bradyid.com/'>Brady Corporation</a> as a Web Developer, and recently worked at <a href='https://www.codesmith.io/'>Codesmith</a> as a Software Engineer. In my downtime, I enjoy playing and listening to music (as you can tell by my photo!). Let's be in touch!
        </p>
        <h5>Skills & Technologies</h5>
      <Marquee autoFill={true} speed={30} className='skills-box'> JavaScript TypeScript C++ React Vue HTML CSS Node.js Express MongoDB PostgreSQL OAuth Jest Docker Git&nbsp;</Marquee>
      </div>
      <div id='modal-btn-container'>
        <button className='modal-btn' onClick={() => setExpModalShow(true)}>
          Experience
        </button>
        <button className='modal-btn' onClick={() => setProjModalShow(true)}>
          Projects
        </button>
      </div>
      <div id='tail-content'>
        <ExperienceModal show={expModalShow} onHide={() => setExpModalShow(false)} />
        <ProjectModal show={projModalShow} onHide={() => setProjModalShow(false)} />   
        <Link to="/music">
          <img id='viola-img' src={violaImg} alt="Small illustration of stringed instrument" />
        </Link>
      </div>
    </>
  );
}

export default HomePage;
