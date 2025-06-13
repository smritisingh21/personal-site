// import React from 'react'
// import './Projects.css'
// import './Projectcard.css'
// import { Link } from 'react-router-dom';
// import { useGSAP } from '@gsap/react';


// export default function Projectcard({ title, description, link1, link2 }) {
//   return (
//     <>
//         <div className="card">
//           <h3>{title}</h3>
//           <div>
//           <Link to={link1}><button>Live Demo <img src="./public/Link.svg" /></button></Link>
//           <Link to={link2}><button>Repository <img src="" /></button></Link>
//           </div>
          
//         </div>

//         <div className="description">
//           <p>{description}</p>
//           <p>Technologies used: React, Node.js, Express, MongoDB</p>

//         </div>
//         </>
//       )
// }


import React, { useState } from 'react';
import './ProjectCard.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectCard = ({ number, title, description, link1, link2 }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="project-card">
      <div className="project-number">{number}</div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}&nbsp;&nbsp;
            <button
            onClick={() => setShowDescription(!showDescription)}
            className="dropdown-toggle"
            aria-label="Toggle description"
          >
            {showDescription ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          </h3>
           
            <div className="project-links">
          <a href={link1} target="_blank" rel="noopener noreferrer" className="btn">
            Live 🔗
          </a>
          <a href={link2} target="_blank" rel="noopener noreferrer" className="btn">
            Github
          </a>
        </div>
        </div>

        {showDescription && (
          <p className="project-description">{description}</p>
        )}

      
      </div>
    </div>
  );
};

export default ProjectCard;

