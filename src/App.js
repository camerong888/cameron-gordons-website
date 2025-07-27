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
import Raytheon from "./components/workexperience/Raytheon";
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
            />
            <Route
              path="/iridiumiotembeddeddevice"
              element={
                <main>
                  <IridiumIoTEmbeddedDevice />
                </main>
              }
            />
            <Route
              path="/smarthand"
              element={
                <main>
                  <SmartHand />
                </main>
              }
            />
            <Route
              path="/tcb"
              element={
                <main>
                  <TelemetryCommunicationBoard />
                </main>
              }
            />
            <Route
              path="/dashboard"
              element={
                <main>
                  <DashboardProject />
                </main>
              }
            />
            <Route
              path="/charger"
              element={
                <main>
                  <ChargerProject />
                </main>
              }
            />
            <Route
              path="/libertydefense"
              element={
                <main>
                  <LibertyDefense />
                </main>
              }
            />
            <Route
              path="/raytheon"
              element={
                <main>
                  <Raytheon />
                </main>
              }
            />
            <Route
              path="/ner"
              element={
                <main>
                  <NER />
                </main>
              }
            />
            <Route
              path="/tesla"
              element={
                <main>
                  <Tesla />
                </main>
              }
            />
            <Route
              path="/redwire"
              element={
                <main>
                  <Redwire />
                </main>
              }
            />
            <Route
              path="/fresenius"
              element={
                <main>
                  <Fresenius />
                </main>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
