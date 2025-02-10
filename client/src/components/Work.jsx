import React from 'react';
import '../styles/Work.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { projects } from '../data/constants';

export const Work = () => {
  return (
    <div>
      <section className="work" id="work">
        <h1>Projects</h1>
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
                <div className="back-content">
                  <div className="back-title">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="back-description">
                    <p>{item.description.slice(0, 150)}</p>
                  </div>
                  <div className='work-links'>
                    <a href={item.link2} target='_blank' rel='noopener noreferrer' className='work-link'>
                      <FaGithub className='work-icon2' />
                    </a>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className='work-link'>
                      <FaExternalLinkAlt className='work-icon' />
                    </a>
</div>
                  </div>
                  <img className='work-back-image' src={item.image} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
