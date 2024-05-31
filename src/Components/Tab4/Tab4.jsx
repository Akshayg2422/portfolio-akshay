import React, { useState, useEffect, useRef } from 'react';
import JobDescription from '../../CommonComponent/JobDescription/JobDescription'
import { motion } from 'framer-motion';
import Logo from '../../assets/Logo/stringLogo.png'

const Tab4 = () => {

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
        'Develop tailored solutions for Mortgage Process Outsourcing (MPO) to meet client-specific needs.',
        'Optimize and streamline mortgage processes to improve operational efficiency.',
        'Enhance overall process efficiency by identifying and implementing best practices.',
        'Reduce costs through efficient resource management and process improvements.',
        'Collaborate with clients to ensure solutions align with their business goals and regulatory requirements.'
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
                    jobTitle="Process Associate"
                    duration=" Apr 2017 - Nov 2017 · 8 mos"
                    company="String Information Services · Full-time"
                    location="Saidapet, Chennai · On-site"
                    responsibilities={responsibilities}
                />
            </motion.div>
        </div>
    );
};

export default Tab4;