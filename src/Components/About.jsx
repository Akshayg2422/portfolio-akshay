import React from 'react'
import akshay from '../assets/Images/akshay.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={akshay} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>I am Akshay G</p>
                    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                    <button className='button'>Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default About