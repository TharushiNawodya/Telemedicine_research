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
            <li>
              <Link to="/">Home</Link>
            </li>
            </div>  

            <div className='list2'>
            <li>
              <Link to="/Process">Process</Link>
            </li>
            </div>

            <div className='list3'>
            <li>
              <Link to="/Results">Results</Link>
            </li>
            </div>
        </ul>
      </div>
    </nav>
    </div>
  )
}
