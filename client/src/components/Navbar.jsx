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
                    <div className="navbar-content-item">Home</div>
                    <div className="navbar-content-item">About</div>
                    <div className="navbar-content-item">Skill</div>
                    <div className="navbar-content-item">Projects</div>
                    <div className="navbar-content-item">Contact</div>
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
                    <div className="dropdown-item">Home</div>
                    <div className="dropdown-item">About</div>
                    <div className="dropdown-item">Skill</div>
                    <div className="dropdown-item">Projects</div>
                    <div className="dropdown-item">Contact</div>
                </motion.div>
                </>
            )}
        </>
    );
}
