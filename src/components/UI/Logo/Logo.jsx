import React from 'react';
//icon
import logo from './logo.svg';
//css
import './Logo.css'

const Logo = () => {
  return (
     <a href="/users" className="logo">
      <div className="logo__container side-container">
        <img src={logo} alt="Company Logo" className='logo__img'/>
        <span className='logo__title'>Dashboard</span>
      </div>
     </a>
  )
}

export default Logo