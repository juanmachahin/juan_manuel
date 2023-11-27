import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Bio from './Bio/Bio'
import Contact from './Contact/Contact' 
import Portfolio from './Portfolio/Portfolio'
import Music from './Music/Music'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App' >
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bio" element={<Bio />} />
       <Route path="/Portfolio" element={<Portfolio />} /> 
        <Route path="/Contact" element={<Contact />} />
       <Route path="/Music" element={<Music />} />
      </Routes>
    </div>
  )
}

export default App
