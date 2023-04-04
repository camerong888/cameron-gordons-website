import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <main>
          <Home />
          <Projects />
          <WorkExperience />
          <About />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
