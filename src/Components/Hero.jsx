import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <h1>Welcome to <span style={{ color: 'var(--secondary-color)' }}>My Website</span></h1>
                <p>Hello there! I'm Akshay G, a diligent React JS Developer based in
                    Gummidipoondi, Chennai. Explore my projects, skills, and services to
                    get to know me better.</p>
                {/* <button href='/' className='button'>Download Resume</button> */}
            </div>
        </div>
    )
}

export default Hero