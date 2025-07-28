import React from "react";
import "./Raytheon.css";
import { motion } from 'framer-motion';
import raytheonLogo from "../../assets/raytheon/raytheon_logo.png";
import sbxImage from "../../assets/raytheon/SBX.jpeg";

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
        Raytheon - Hardware Engineer II
      </motion.h1>
      <div style={{ width: '100%', maxWidth: '600px', margin: '1rem auto', borderBottom: '2px solid var(--secondary-color)', opacity: 0.3 }}></div>
      <motion.img 
        src={raytheonLogo} 
        alt="Raytheon Logo" 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '300px', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1.5rem', margin: '1rem 0' }}
      >
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Role Overview</h2>
        <p>
          As a Hardware Engineer at Raytheon, I contributed to critical defense projects, focusing on hardware-software integration and system reliability improvements.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1.5rem', margin: '1rem 0' }}
      >
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Key Achievements</h2>
        <p>
          I led the hardware and software integration for the X-band Digital Receiver/Exciter (DREX) in the Sea-Based X-Band Radar (SBX), ensuring on-schedule delivery for a $2.2 billion missile defense program. 
        </p>
        <p>
          I diagnosed system timing issues through signal path analysis and resolved discrepancies with firmware and software updates, which increased synchronization accuracy by 30%. 
        </p>
        <p>
          Additionally, I identified root causes of diagnostic failures and implemented fixes that enhanced system reliability, boosting pass rates by 200%.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', margin: '2rem 0' }}
      >
        <img src={sbxImage} alt="Sea-Based X-Band Radar (SBX)" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)' }} />
      </motion.div>
    </div>
  );
}

export default Raytheon; 