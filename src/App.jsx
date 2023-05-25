import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Process from './pages/Process'
import Results from './pages/Results'

import {Routes,BrowserRouter,Route} from 'react-router-dom';
import { Link } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Questions from './pages/Questions'



function App() {
  

  return (
    
    
      <div>
        
      
      <BrowserRouter>
        <Routes>
        
            

              <Route path="/" element={<Home/>}/>
              

              <Route path="/Process" element={<Process/>}/>
              

              <Route path="/Results" element={<Results/>}/>
              
              <Route path="/Questions" element={<Questions/>}/>
              
        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default App
