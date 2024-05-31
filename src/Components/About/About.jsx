import React, { useEffect, useRef, useState } from 'react';
import akshay from '../../assets/Images/akshay.png';
import './About.css';
import path_to_your_resume from '../../assets/akshay.pdf';
import { motion, useAnimation } from 'framer-motion';
import Spinner from '../../CommonComponent/Spinner/Spinner';

const About = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const downloadResume = () => {
        setIsLoading(true);
        const url = path_to_your_resume;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'akshay_resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            setIsLoading(false); // Reset the loading state after a delay
        }, 2000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    const buttonVariants = {
        hover: { scale: 1.1, x: 12, transition: { type: 'spring', stiffness: 300 } }
    };


    return (
        <motion.div
            className='container mt-5'
            id='about'
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <h2>About</h2>
            <span className='line'></span>
            <div className={'row'}>
                <motion.div
                    className={'col-md-6'}
                    variants={imageVariants}
                >
                    <img height={'100%'} width={'100%'} src={akshay} alt='akshay-image' />
                </motion.div>
                <motion.div
                    className={'col-md-6 mt-md-5 align-self-center'}
                    variants={containerVariants}
                >
                    <motion.p variants={itemVariants}>I am Akshay G</motion.p>
                    <motion.p variants={itemVariants}>
                        I am a frontend web developer. I can provide clean code and pixel perfect design. I also make websites more & more interactive with web animations.
                    </motion.p>
                    <motion.button
                        className='button'
                        onClick={downloadResume}
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                        disabled={isLoading} // Disable button when loading
                    >
                        {isLoading ? (
                            <>
                                Downloading...
                                <Spinner />
                            </>
                        ) : (
                            "Download CV"
                        )}
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
