import React from 'react';
//router
import {NavLink} from 'react-router-dom';
//css
import './NavItem.css';

const NavItem = ({title, path, active, children}) => {

   return (
        <NavLink to={path} className="navbar__item">
          <div className="navbar__container side-container">
            <div className="navbar__icon">
              {children}
            </div>
            <div className="navbar__title">
              {title}
            </div>
          </div>
        </NavLink>
  )
}

export default NavItem