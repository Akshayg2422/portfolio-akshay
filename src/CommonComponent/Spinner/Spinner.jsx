import React from 'react';
import { motion } from 'framer-motion';
import './Spinner.css';

const Spinner = () => (
    <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
    />
);

export default Spinner;
