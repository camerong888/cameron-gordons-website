import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './TelemetryCommunicationBoard.css'; 
import PCBpicture from '../../assets/telemetrycommunicationboard.jpeg'; 
import DashboardProject from './DashboardProject';

function TelemetryCommunicationBoard() {
  return (
    <div className="telemetry-board">
      <Header />
      <DashboardProject />
      <h1>Telemetry Communication Board Project</h1>
      <img src={PCBpicture} alt="Telemetry Communication Board (2023 Comp Year)" className="pcb-picture" />
      <p>Here's some information about the project:</p>
      <ul>
        <li>It was built using React</li>
        <li>It communicates with an external API to display real-time telemetry data</li>
        <li>It has a user-friendly interface that allows users to easily interact with the data</li>
      </ul>
      <Footer />
    </div>
  );
}

export default TelemetryCommunicationBoard;

// return (
//   <div className="App">
//     <Router>
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<main>
//               <Home />
//               <Projects />
//               <WorkExperience />
//               <About />
//               <Contact />
//             </main>
//           } 
//           index
//           />
//           <Route path="/components/projects/telemetry-communication-board" element={<TelemetryCommunicationBoard />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   </div>
// );