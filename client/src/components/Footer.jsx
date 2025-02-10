import React, { useEffect, useState } from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import '../styles/Footer.css'
import { Bio } from '../data/constants';
import {Link} from 'react-router-dom'

export const Footer = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1150);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1150);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const truncatedDescription = isSmallScreen ? `${Bio.description.substring(0, 100)}...` : Bio.description;

  return (
    <div>
        <footer class="footer">
    <div class="footer-content">
        <div class="footer-about">
            <h3>About Me</h3>
            <p>{truncatedDescription.slice(0,200)}</p>
        </div>
        <div class="footer-social">
            <h3>Follow Me</h3>
            <div className="footer-icon">
                    <div className='footer-social-icons'>
                       <Link to='https://github.com/Suganthchandran'> <FaGithub /> </Link>
                    </div>
                    <div className='footer-social-icons'>
                       <Link to='https://x.com/Suganth__7'> <FaTwitter /> </Link>
                    </div>
                    <div className='footer-social-icons'>
                       <Link to='https://leetcode.com/u/Suganth__/'> <SiLeetcode /> </Link>
                    </div>
                    <div className='footer-social-icons'>
                       <Link to='https://www.linkedin.com/in/suganth121204/'> <FaLinkedinIn /> </Link>
                    </div>
            </div>
        </div>
        <div class="footer-contact">
            <h3>Contact</h3>
            <p>Email: suganthchandran@gmail.com</p>
            <p>Phone: +91 9042482004</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 | Suganth A. All rights reserved.</p>
    </div>
</footer>
    </div>
  )
}
