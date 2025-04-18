import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {
    const [isInView, setIsInView] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({
                width: '100%',
                transition: { duration: 2, ease: 'easeInOut' }
            });
        }
    }, [isInView, controls]);

    const handleScroll = () => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection.getBoundingClientRect().top <= window.innerHeight * 0.75) {
            setIsInView(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const skills = [
        { title: 'Javascript', level: '70%', styleClass: styles.javascript },
        { title: 'Html', level: '60%', styleClass: styles.html },
        { title: 'Css', level: '60%', styleClass: styles.css },
        { title: 'Scss', level: '60%', styleClass: styles.scss },
        { title: 'Bootstrap', level: '60%', styleClass: styles.bootstrap },
        { title: 'Mui', level: '60%', styleClass: styles.bootstrap },
        { title: 'Typescript', level: '50%', styleClass: styles.typescript },
        { title: 'React', level: '70%', styleClass: styles.react },
        { title: 'Redux', level: '70%', styleClass: styles.redux },
        { title: 'Redux-Toolkit', level: '70%', styleClass: styles.redux },
        { title: 'Redux-Saga', level: '70%', styleClass: styles.reduxSaga },
        { title: 'React-Router', level: '50%', styleClass: styles.reactRouter },
        { title: 'Git', level: '80%', styleClass: styles.github },
        { title: 'GitHub', level: '80%', styleClass: styles.github },
        { title: 'Bitbucket', level: '90%', styleClass: styles.bitBucket },
        { title: 'Azure', level: '90%', styleClass: styles.bitBucket },
    ];

    return (
        <div className={'container'} id='skills'>
            <h2>Skills</h2>
            <span className='line'></span>

            <div className={'row'}>
                {skills.map((skill, index) => (
                    <div className={'col-md-6 m-0 m-sm-0'} key={index}>
                        <div className={styles.skillBox}>
                            <span className={styles.title}>{skill.title}</span>
                            <div className={styles.skillBar}>
                                <motion.span
                                    className={`${styles.skillPer} ${skill.styleClass}`}
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: skill.level } : { width: 0 }}
                                    transition={{ duration: 2, ease: 'easeInOut' }}
                                >
                                    <span className={styles.tooltip}>{skill.level}</span>
                                </motion.span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
