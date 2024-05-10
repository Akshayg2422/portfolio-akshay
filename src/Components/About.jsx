import React from 'react';
import akshay from '../assets/Images/akshay.png';
import './About.css';
import path_to_your_resume from '../assets/akshay.pdf'
import { motion } from 'framer-motion';

const About = () => {
    const downloadResume = () => {
        const url = path_to_your_resume
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'akshay_resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='container mt-5' id='about'>
            <h2>About</h2>
            <span className='line'></span>
            <div className={'row'}>
                <div className={'col-md-6'}>
                    <img height={'100%'} width={'100%'} src={akshay} alt='akshay-image' />
                    {/* <Card /> */}
                </div>
                <div className={'col-md-6 mt-md-5 align-self-center'}>
                    <p>I am Akshay G</p>
                    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                    <motion.button className='button' onClick={downloadResume}
                        whileHover={{
                            scale: 1.1,
                            x: 12
                        }}
                    >Download Resume</motion.button>
                </div>
            </div>
        </div>
    );
};

export default About;
