import React from 'react'
import {Link } from "react-router-dom";

function Navigation() {
  
  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
        <ul className=' justify-content-center'>
            <li className='mx-5 nav'><Link to="/">Home</Link></li>
            <li className='mx-5 nav'><Link to="/login">Login</Link></li>
            <li className='mx-5 nav'><Link to="/signup">Signup</Link></li>
        </ul>
    </div>
  )
}

export default Navigation