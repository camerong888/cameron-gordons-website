import React from "react";
import "./Extracurriculars.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; // Add this import for animations

function Extracurriculars() {
  return (
    <div className="extracurriculars-container" style={{ backgroundColor: 'var(--bg-color)', padding: '2rem' }}>
      <section id="extracurriculars" className="extracurriculars">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="extracurriculars-title"
          style={{ color: 'var(--primary-color)' }}
        >
          Extracurriculars
        </motion.h2>
        <div style={{ width: '100%', maxWidth: '600px', margin: '1rem auto', borderBottom: '2px solid var(--secondary-color)', opacity: 0.3 }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/ner" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>
                Electrical Project Lead at Northeastern Electric Racing (NER)
              </Link>
            </h3>
            <p>Sep 2019 - Aug 2023</p>
            <p>Boston, MA</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Extracurriculars;