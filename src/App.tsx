import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Communication from './pages/Communication';
import All from './pages/All';
import FirstChart from './pages/Charts/FirstChart/FirstChart';
import SecondChart from './pages/Charts/SecondChart/SecondChart';
import ThirdChart from './pages/Charts/ThirdChart/ThirdChart';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/communication" element={<Communication/>}/>
        <Route path="/all" element={<All/>}/>
        <Route path="/1" element={<FirstChart/>}/>
        <Route path="/2" element={<SecondChart/>}/>
        <Route path="/3" element={<ThirdChart/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
