// src/Loader.js
import React from 'react';
import './Loader.css';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loader-overlay"
    >
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default Loader;
