import React from 'react';
//components
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
//css
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar__logo">
          <Logo/>
        </div>
        <div className="sidebar__nav">
          <Navbar/>
        </div>
    </aside>
  )
}

export default Sidebar