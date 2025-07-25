import React from "react";
import "./Contact.css";
import { motion } from 'framer-motion'; // Add this import for animations

function Contact() {
  return (
    <div className="contact-container" style={{ backgroundColor: 'var(--bg-color)', padding: '2rem' }}>
      <section id="contact" className="contact">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-title"
          style={{ color: 'var(--primary-color)' }}
        >
          Contact
        </motion.h2>
        <div style={{ width: '100%', maxWidth: '600px', margin: '1rem auto', borderBottom: '2px solid var(--secondary-color)', opacity: 0.3 }}></div>
        {/* Wrap content in card-like division */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1.5rem', margin: '1rem 0', textAlign: 'center' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}
          >
            Feel free to reach out to me at:
          </motion.p>
          {/* Enhanced layout: Use flexbox for horizontal, centered contact items without bullets */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Email</span>
              <a href="mailto:camerong888@gmail.com" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>
                camerong888@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/gordonca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}
              >
                linkedin.com/in/gordonca
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Github</span>
              <a
                href="https://github.com/camerong888"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}
              >
                github.com/camerong888
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;