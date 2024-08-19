import React from 'react';
import '../styles/Work.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from '../data/constants';

export const Work = () => {
  return (
    <div>
      <section className="work" id="work">
        <h1>Work</h1>
        <div className="work-list">
            {projects.map((item, index) => (
          <div className="work-items">
              <div className="content" key={index}>
                <div className="front">
                  <div className="front-content">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
                <div className="back">
                  <h1>{item.title}</h1>
                  <p>{item.description.slice(0,100)}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className='work-icon' />
                  </a>
                </div>
              </div>
          </div>
            ))}
        </div>
      </section>
    </div>
  );
};
