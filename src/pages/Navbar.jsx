import React from 'react'
import './Navbar.css'
import Home from './Home'
import Process from './Process'
import Results from './Results'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
      
      <div className='N1'>
        <ul className='navbarli'>
        <div className='list1'>
            <li >
              <Link to="/" className='l11'>Home</Link>
            </li>
            </div>  

            <div className='list2'>
            <li>
              <Link to="/Process" className='l12'>Process</Link>
            </li>
            </div>

            <div className='list3'>
              <li>
              <Link to="/Results" className='l13'>Results</Link>
            </li>
            </div>
        </ul>
      </div>
    </nav>
    </div>
  )
}
