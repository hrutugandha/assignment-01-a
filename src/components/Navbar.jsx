import React from 'react'
import Links from './Links'
import '../App.css';

export default function Navbar() {
  return (
    <div className="navbar">
       <div className="nav-container">
           <h5 className="nav-title">LOGOBAKERY</h5>
           <Links className="nav-links" />
           <p className="button">
              <button className="btn">Contact</button></p>
       </div>
    </div>
  )
}
