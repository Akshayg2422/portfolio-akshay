import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const section = sectionRef.current;
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, [controls]);

    const textVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <motion.div
            className='hero'
            id='hero'
            ref={sectionRef}
            initial="hidden"
            animate={controls}
        >
            <div className='content'>
                <div style={{ margin: 'auto' }} className="social-card">
                    <div className="boxshadow"></div>
                    <div className="main">
                        <div className="top"></div>
                        <div className="left side"></div>
                        <div className="right side"></div>
                        <div className="title">Akshay G</div>
                        <div className="button-container">
                            <a href='https://www.linkedin.com/in/aks2415hay/' target='blank' className="button">
                                <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="red" viewBox="0 0 24 24">
                                    <path d="M20.5,2H3.5A1.5,1.5,0,0,0,2,3.5v17A1.5,1.5,0,0,0,3.5,22h17a1.5,1.5,0,0,0,1.5-1.5V3.5A1.5,1.5,0,0,0,20.5,2ZM8.5,19H5.6V10h2.9ZM7,8.5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,7,8.5ZM19,19H16.1V14.1c0-1.3-.6-2.7-1.8-2.7s-2.1,1.1-2.1,2.7V19H9.2V10h2.7v1.4H12V10h2.6v1.4H15V10h2.6Z"></path>
                                </svg>
                            </a>
                            <a href='https://github.com/Akshayg2422' target='blank' className="button">
                                <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                    </path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </a>
                            <a href='https://www.instagram.com/akshayvalla/' target='blank' className="button">
                                <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="red" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                >
                    Welcome to <span style={{ color: 'var(--primary-color)' }}>My Website</span>
                </motion.h1>
            </div>
        </motion.div>
    );
}

export default Hero;
