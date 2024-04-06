import React from 'react'
import project1 from '../assets/Images/project1.png'
import project2 from '../assets/Images/project2.png'
import project3 from '../assets/Images/project3.png'
import project4 from '../assets/Images/Project4.png'
import project5 from '../assets/Images/project5.png'
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <div className={'pt-3'} >
            <div className={styles.container} id='projects'>
                <h2>Projects</h2>
                <span className='line'></span>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <img height={80} width={80} src={project1} alt='project1' />
                        <p><a href='https://www.intrvu.space/' target='blank'>Intrvu SPACE</a></p>
                        <p>Intrvu Space helps you conduct automated Interviews, Generate Reports, and Approve Candidates
                            end to end with zero manual effort. The automated interviews are conducted using an AI interviewer in
                            place of the traditional interviewer with proxy enforcement on face, voice, and location.</p>
                    </div>
                    <div className={styles.card}>
                        <img height={80} width={80} src={project2} alt='project2' />
                        <p><a href='https://www.zenyq.com/' target='blank'>Zeny Q</a></p>
                        <p>
                            Employee management application with features like attendance, shift management, leave management, time sheets, notifications, payroll calculations, report generation, and payment processing. Includes options for remote check-in, shift allocation, leave application, real-time tracking, e-document management, and customizable pay slips.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img height={80} width={80} src={project3} alt='project3' />
                        <p><a href='https://www.quantatms.in/' target='blank'>Quanta TMS</a></p>
                        <p>Quanta TMS transforms task and ticket management, boosting productivity and collaboration. Create swift
                            resolutions, embrace dynamic news feeds, and enhance remote teamwork. With comprehensive timesheets
                            and efficient communication, Quanta TMS shapes the future of collaboration.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img height={80} width={80} src={project4} alt='project4' />
                        <p><a href='https://www.quantaedat.com/' target='blank'>Quanta EDAT</a></p>
                        <p>
                            Quanta EDAT provides comprehensive programming courses in Java, JavaScript, and Python, focusing on practical tasks and mock interviews. Students track progress, access digital branding features, and store task details. This platform expert instruction for continuous learning and lifelong growth.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img height={80} width={80} src={project5} alt='project5' />
                        <p><a href='' target='blank'>NSI-FG</a></p>
                        <p>NSI - FG Management simplifies inventory control with its Stock and Product modules. Effortlessly manage stock movement and requests while enhancing visibility with paginated product listings. Streamline logistics by optimizing product movement between warehouse locations and vehicles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects