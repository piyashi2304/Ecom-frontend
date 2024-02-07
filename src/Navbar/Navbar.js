import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <> 
        <div className='navbar-heading'>
        <h1>iSHOP</h1>
        <div className='search-container'>
        <input type='text'  placeholder='Search'/>
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        
        </div>
        <button>Login</button>
        <i class="fa-solid fa-cart-flatbed"></i>
        </div>
    </>
  )
}

export default Navbar