import React, { useState, useEffect, useRef } from 'react';
import JobDescription from '../../CommonComponent/JobDescription/JobDescription'
import { motion } from 'framer-motion';
import Logo from '../../assets/Logo/tenthPlanetLogo.png'

const Tab3 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    const responsibilities = [
        'Provide customized enterprise IT solutions centered around open source software.',
        'Design and implement tailored IT solutions to meet specific client needs.',
        'Ensure compliance with industry standards and regulatory requirements.',
        'Troubleshoot and resolve technical issues promptly to minimize downtime.',
        'Collaborate with clients to understand their requirements and deliver optimal solutions.'
    ];

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <JobDescription
                    logo={Logo}
                    jobTitle="Data Provisioning Executive"
                    duration=" Jan 2019 - Nov 2019 · 11 mos"
                    company="Tenth Planet Technologies · Full-time"
                    location="Mount Road, Chennai · On-site"
                    responsibilities={responsibilities}
                />
            </motion.div>
        </div>
    );
};

export default Tab3;