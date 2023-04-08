import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './globalStyles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelemetryCommunicationBoard from './components/projects/TelemetryCommunicationBoard'; 


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<main>
                <Home />
                <Projects />
                <WorkExperience />
                <About />
                <Contact />
              </main>
            } 
            index
            />
            {/* <Route path="/components/projects/telemetry-communication-board" element={<TelemetryCommunicationBoard />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}


export default App;