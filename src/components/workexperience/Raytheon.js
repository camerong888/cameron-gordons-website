import React from "react";
import "./Raytheon.css";
import { motion } from 'framer-motion';

function Raytheon() {
  return (
    <div className="raytheon-container" style={{ backgroundColor: 'var(--bg-color)', padding: '2rem' }}>
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="raytheon-title" 
        style={{ color: 'var(--primary-color)' }}
      >
        Raytheon - Hardware Engineer
      </motion.h1>
      <div style={{ width: '100%', maxWidth: '600px', margin: '1rem auto', borderBottom: '2px solid var(--secondary-color)', opacity: 0.3 }}></div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ margin: '1rem auto', maxWidth: '800px', textAlign: 'center' }}
      >
        [Add your description of the Raytheon experience here]
      </motion.p>
      {/* Add more sections or details as needed */}
    </div>
  );
}

export default Raytheon; 