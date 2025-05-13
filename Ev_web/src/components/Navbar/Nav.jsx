import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">EV-oultion</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>Content</li>
        </ul>

    </div>
  )
}

export default Nav