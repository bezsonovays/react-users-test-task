import React from 'react';
import { NavLink } from 'react-router-dom';
//css
import './UserFilterItem.css';

const UserFilterItem = ({title, amount, path, className}) => {
  return (
        <NavLink title="Ideas" to={path} className="filter__item">
            <h5 className="filter__title">{title}</h5>
            <div className="filter__amount">{amount}</div>
        </NavLink>
  )
}

export default UserFilterItem