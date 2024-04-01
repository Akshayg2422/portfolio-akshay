import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/Images/logo.png'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {

    //setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        window.scrollY >= 90 ? setColor(true) : setColor(false)
    }

    window.addEventListener('scroll', changeColor)

    // close menu onclick
    const closeMenu = () => setClick(false)

    return (
        <div className={`${color ? 'header header-bg' : 'header'} `}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} hashSpy={true} offset={10} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="demo" spy={true} smooth={true} hashSpy={true} offset={-150} duration={500} onClick={closeMenu}>Demo</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar