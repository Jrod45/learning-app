import './App.css'
import Homepage from './components/homepage'
import Sidebar from './components/Sidebar'

function App() {
    return (
      <div className="main-wrapper">
        <div className='main-container'>
         <Sidebar />
         <div className="title-container">
               <Homepage />
         </div>
    </div>
      <div className="footer">
        <p>© 2025 Wise Language Mentor. All rights reserved.</p>
        <p>Contact us: support@wiselang.com</p>
      </div>
  </div>
  )
}

export default App
