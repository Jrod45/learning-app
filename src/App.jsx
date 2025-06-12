import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Achievements from './components/Achievements';
import Lessons from './components/Lessons';
import Progress from './components/Progress';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <div className='main-container'>
         <Sidebar />
         <div className="title-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
         </div>
    </div>
      <div className="footer">
        <p>© 2025 Wise Language Mentor. All rights reserved.</p>
        <p>Contact us: support@wiselang.com</p>
      </div>
      </div>
    </Router>
  )
}

export default App
