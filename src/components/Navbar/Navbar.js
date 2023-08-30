import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='n-wrapper'>
            <div className='n-left'>
                    <div className='n-name'>Barak </div>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{listStyleType:'none'}}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>

                    </ul>
                </div>
                <button className='button n-button'>Contact Us</button>
            </div>
    </div>
  )
}

export default Navbar
