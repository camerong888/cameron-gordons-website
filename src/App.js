import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Extracurriculars from "./components/Extracurriculars";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import "./globalStyles.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SmartHand from "./components/projects/SmartHandProject";
import IridiumIoTEmbeddedDevice from "./components/projects/IridiumIoTEmbeddedDevice";
import TelemetryCommunicationBoard from "./components/projects/TelemetryCommunicationBoard";
import DashboardProject from "./components/projects/DashboardProject";
import ChargerProject from "./components/projects/ChargerProject";
import NER from "./components/extracurriculars/NER";
import Fresenius from "./components/workexperience/Fresenius";
import Tesla from "./components/workexperience/Tesla";
import Redwire from "./components/workexperience/Redwire";
import LibertyDefense from "./components/workexperience/LibertyDefense";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <ScrollToTop />
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Home />
                  <WorkExperience />
                  <Projects />
                  <Extracurriculars />
                  <About />
                  <Contact />
                </main>
              }
              index
              
            />
            <Route
              path="/iridiumiotembeddeddevice"
              element={
                <main>
                  <IridiumIoTEmbeddedDevice />
                </main>
              }
              index
            />
            <Route
              path="/smarthand"
              element={
                <main>
                  <SmartHand />
                </main>
              }
              index
            />
            <Route
              path="/tcb"
              element={
                <main>
                  <TelemetryCommunicationBoard />
                </main>
              }
              index
            />
            <Route
              path="/dashboard"
              element={
                <main>
                  <DashboardProject />
                </main>
              }
              index
            />
            <Route
              path="/charger"
              element={
                <main>
                  <ChargerProject />
                </main>
              }
              index
            />
            <Route
              path="/libertydefense"
              element={
                <main>
                  <LibertyDefense />
                </main>
              }
              index
            />
            <Route
              path="/ner"
              element={
                <main>
                  <NER />
                </main>
              }
              index
            />
            <Route
              path="/tesla"
              element={
                <main>
                  <Tesla />
                </main>
              }
              index
            />
            <Route
              path="/redwire"
              element={
                <main>
                  <Redwire />
                </main>
              }
              index
            />
            <Route
              path="/fresenius"
              element={
                <main>
                  <Fresenius />
                </main>
              }
              index
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
