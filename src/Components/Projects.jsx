import React from 'react'
import project1 from '../assets/Images/project1.png'
import user2 from '../assets/Images/user2.jpeg'
import user3 from '../assets/Images/user3.jpeg'
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <h2>Projects</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img height={80} width={80} src={project1} alt='user1' />
                        <p><span>Intrvu Space</span></p>
                        <p>Intrvu Space helps you conduct automated Interviews, Generate Reports, and Approve Candidates
                            end to end with zero manual effort. The automated interviews are conducted using an AI interviewer in
                            place of the traditional interviewer with proxy enforcement on face, voice, and location.</p>
                        {/* <p>Director of "Financial Times"</p> */}
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1' />
                        <p>In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Director at Risktec Solutions Ltd</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects