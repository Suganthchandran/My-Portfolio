import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Bio } from '../data/constants.js';
import { Button } from './Button.jsx';
import Typewriter from 'typewriter-effect';
import {Tilt} from 'react-tilt'
import { headContentAnimation, headTextAnimation } from '../utils/motion.js';

export const Home = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 390);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 390);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const truncatedDescription = isSmallScreen ? `${Bio.description.substring(0, 250)}...` : Bio.description;

    return (
        <section className="home" id="home">
            <div className="home-content">
                <motion.div {...headTextAnimation}>
                <h3>Hi Myself,</h3>
                <h1>{Bio.name}</h1>
                <h3>And I'm a <span className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: Bio.roles,
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'typewriter-text',
                        }} />
                </span></h3>
                </motion.div>
                <motion.div {...headContentAnimation}>
                <p>{truncatedDescription}</p>
                </motion.div>

                <div className="home-icon">
                    <div className='social-icons'>
                        <FaGithub />
                    </div>
                    <div className='social-icons'>
                        <FaTwitter />
                    </div>
                    <div className='social-icons'>
                        <FaInstagram />
                    </div>
                    <div className='social-icons'>
                        <FaLinkedinIn />
                    </div>
                </div>

                <Button name="Download CV" />
            </div>

            <motion.div
                className="home-img"
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Tilt><img src={Bio.image} alt="Suganth" /></Tilt>
            </motion.div>
        </section>
    );
};
