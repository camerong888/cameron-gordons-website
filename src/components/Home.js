import React from "react";
import "./Home.css";
import profilePicture from "../assets/Headshot.jpg";
import { motion } from 'framer-motion'; 

function Home() {
  return (
    <div className="home-container" style={{ background: 'linear-gradient(to bottom, var(--primary-color), var(--bg-color))', padding: '4rem 0', textAlign: 'center' }}>
      <section id="home" className="home">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="home-title"
          style={{ color: '#fff', fontSize: '3rem', marginBottom: '1rem', backgroundColor: 'transparent' }} // Removed conflicting background color
        >
          Welcome to My Portfolio
        </motion.h2>
        <motion.img
          src={profilePicture}
          alt="Cameron Gordon"
          className="profile-picture"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ borderRadius: '50%', boxShadow: '0 4px 12px var(--shadow)', maxWidth: '300px' }}
        />
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ color: '#fff', fontSize: '1.2rem', maxWidth: '800px', margin: '1rem auto' }} // Enhanced styling for consistency
        >
          Exploring engineering innovations in embedded systems and beyond.
        </motion.p>
      </section>
    </div>
  );
}

export default Home;