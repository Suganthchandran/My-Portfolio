import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import '../styles/Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
    const [isSmall, setIsSmall] = useState(false);

    return (
        <>
            <header className="navbar">
                <div id="navbar-name">
                    <span>Sug</span>anth
                </div>
                <div className="small-navbar-content">
                    <GiHamburgerMenu onClick={() => setIsSmall(true)} />
                </div>
                <div className="navbar-content">
                    <div className="navbar-content-item"><a href='#home'>Home</a></div>
                    <div className="navbar-content-item"><a href='#skill'>Skill</a></div>
                    <div className="navbar-content-item"><a href='#work'>Work</a></div>
                    <div className="navbar-content-item"><a href='#contact'>Contact</a></div>
                </div>
            </header>

            {isSmall && (
                <>
                <div className="blur-background" onClick={() => setIsSmall(false)} />
                <motion.div 
                    className="dropdown-navbar"
                    initial={{ y: '-100%', opacity: 0 }}  
                    animate={{ y: 0, opacity: 1 }} 
                    exit={{ y: '-100%', opacity: 0 }}      
                    transition={{ duration: 0.5 }} 
                >
                    <AiOutlineClose className="close-icon" onClick={() => setIsSmall(false)} />
                    <div className="dropdown-item"><a href='#home'>Home</a></div>
                    <div className="dropdown-item"><a href='#skill'>Skill</a></div>
                    <div className="dropdown-item"><a href='#work'>Work</a></div>
                    <div className="dropdown-item"><a href='#contact'>Contact</a></div>
                </motion.div>
                </>
            )}
        </>
    );
}
