import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../../assets/Images/project1.png';
import project2 from '../../assets/Images/project2.png';
import project3 from '../../assets/Images/project3.png';
import project4 from '../../assets/Images/Project4.png'
import project5 from '../../assets/Images/project5.png';
import styles from './Projects.module.css';

const Projects = () => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.05 }
    };

    const cards = [
        {
            img: project1,
            link: 'https://www.intrvu.space/',
            title: 'Intrvu SPACE',
            description: 'Intrvu Space helps you conduct automated Interviews, Generate Reports, and Approve Candidates end to end with zero manual effort. The automated interviews are conducted using an AI interviewer in place of the traditional interviewer with proxy enforcement on face, voice, and location.'
        },
        {
            img: project2,
            link: 'https://www.zenyq.com/',
            title: 'Zeny Q',
            description: 'Employee management application with features like attendance, shift management, leave management, time sheets, notifications, payroll calculations, report generation, and payment processing. Includes options for remote check-in, shift allocation, leave application, real-time tracking, e-document management, and customizable pay slips.'
        },
        {
            img: project3,
            link: 'https://www.quantatms.in/',
            title: 'Quanta TMS',
            description: 'Quanta TMS transforms task and ticket management, boosting productivity and collaboration. Create swift resolutions, embrace dynamic news feeds, and enhance remote teamwork. With comprehensive timesheets and efficient communication, Quanta TMS shapes the future of collaboration.'
        },
        {
            img: project4,
            link: 'https://www.quantaedat.com/',
            title: 'Quanta EDAT',
            description: 'Quanta EDAT provides comprehensive programming courses in Java, JavaScript, and Python, focusing on practical tasks and mock interviews. Students track progress, access digital branding features, and store task details. This platform expert instruction for continuous learning and lifelong growth.'
        },
        {
            img: project5,
            link: '',
            title: 'NSI-FG',
            description: 'NSI - FG Management simplifies inventory control with its Stock and Product modules. Effortlessly manage stock movement and requests while enhancing visibility with paginated product listings. Streamline logistics by optimizing product movement between warehouse locations and vehicles.'
        }
    ];

    return (
        <div className={'pt-3'}>
            <div className={styles.container} id='projects'>
                <h2>Projects</h2>
                <span className='line'></span>
                <div className={styles.content}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <img height={80} width={80} src={card.img} alt={`project${index + 1}`} />
                            <p><a href={card.link} target='blank'>{card.title}</a></p>
                            <p>{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
