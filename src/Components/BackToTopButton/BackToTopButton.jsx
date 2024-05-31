import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import upArrow from '../../assets/Images/upArrow.png'

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const style = {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        zIndex: 1000,
    };

    return (
        <motion.img
            src={upArrow}
            style={style}
            onClick={scrollToTop}
            alt='Top button'
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        />
    );
};

export default BackToTopButton;
