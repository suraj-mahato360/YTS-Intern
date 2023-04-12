import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import 'remixicon/fonts/remixicon.css'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import TodayTask from './pages/TodayTask';
import Important from './pages/Important';
import Planned from './pages/Planned';
import AllTask from './pages/AllTask';
import Weather from './components/Weather';

function App() {

  return (
    <BrowserRouter>
    <div className="App text-white">
      <Navbar/>
      <SideBar/>
      <Weather/>
      <Routes>
        <Route path='/' element={<TodayTask />} />
        <Route path='/important' element={<Important />} />
        <Route path='/planned' element={<Planned />} />
        <Route path='/alltask' element={<AllTask />} />
      </Routes>
    </div>
      </BrowserRouter>
  )
}

export default App
