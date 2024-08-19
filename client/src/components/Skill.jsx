import React from 'react';
import '../styles/Skill.css';
import { skills } from '../data/constants';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

export const Skill = () => {
  return (
    <div id='skill' className='skill'>
        <div id='skill-header'>Skills</div>
        {/* <div className='skill-desc'>Here are some of my skills on which I have been working on the past 2 years.</div> */}
        <div className='skill-content'>
            {skills.map((item, index) => (
                <Tilt key={`item-${index}`}>
                    <div className='skill-content-inner'>
                        <div className='skill-content-title'>{item.title}</div>
                        <div className='skill-content-list'>
                            {item.skills.map((item2, index2) => (
                                <motion.div
                                    className='skill-content-list-inner'
                                    key={`item2-${index2}`}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -10,
                                        x: -10,
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img src={item2.image} alt={item2.name} className='skill-content-list-image'/>
                                    <div className='skill-content-list-name'>{item2.name}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Tilt>
            ))}
        </div>
    </div>
  )
}
