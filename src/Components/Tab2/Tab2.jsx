import React, { useState, useEffect, useRef } from 'react';
import JobDescription from '../../CommonComponent/JobDescription/JobDescription'
import { motion } from 'framer-motion';
import Logo from '../../assets/Logo/matriLogo.png'

const Tab2 = () => {

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
        'Facilitated payments as a Payment Assistant.',
        'Supported users in navigating the payment page.',
        'Utilized chat and system calls to address user concerns.',
        'Convinced users of package benefits.',
        'Ensured a smooth transaction experience.'
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
                    jobTitle="Payment Assistance"
                    duration=" Sep 2021 - Mar 2022 · 7 mos"
                    company="MATRIMONY.COM LIMITED · Full-time"
                    location="Guindy, Chennai · On-site"
                    responsibilities={responsibilities}
                />
            </motion.div>
        </div>
    );
};

export default Tab2;