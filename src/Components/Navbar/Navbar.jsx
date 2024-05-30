import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../assets/Images/logo.png"
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    useEffect(() => {
        const changeColor = () => {
            window.scrollY >= 390 ? setColor(true) : setColor(false);
        };

        window.addEventListener('scroll', changeColor);

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    const navItems = [
        { label: 'Home', to: 'hero' },
        { label: 'About', to: 'about' },
        { label: 'Projects', to: 'projects' },
        { label: 'Skills', to: 'skills' }
    ];

    return (
        <div className={`header ${color ? 'header-bg' : ''}`}>
            <nav className='navbar'>
                <motion.a href='' className='logo'
                    initial={{ y: -250 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                >
                    <img src={logo} alt='logo' />
                </motion.a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {navItems.map((item, index) => (
                        <motion.li key={index} className='nav-item'
                            whileHover={{ scale: 1.1, originX: 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link to={item.to} spy smooth={false} hashSpy offset={-130} duration={500} onClick={closeMenu}>{item.label}</Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
