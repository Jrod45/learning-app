import { useState } from 'react'
import './App.css'
import Homepage from './components/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
         <div className="sidebar">
          <h1 className="sidebar-menu-title">
                 MENU
          </h1>
          <ul className="sidebar-menu-items-list">
            <li className='sample-item'>item 1</li>
            <li className='sample-item'>item 2</li>
            <li className='sample-item'>item 3</li>
          </ul>
         </div>
         <div className="title-container">
             <h1 className='main-title'>WISE LANGUAGE MENTOR</h1>
         <Homepage />
         </div>
    </div>
  )
}

export default App
