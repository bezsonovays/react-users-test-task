import React from 'react';
import AllUsers from '../AllUsers/AllUsers';
import { Routes, Route, Outlet } from 'react-router-dom';
//components
import UserFilterItem from '../UsersFilterItem/UserFilterItem';
//css
import './UserFilter.css';

const UsersFilter = () => {
  return (
    <div className="filter">
      <div className="filter__row">
        <UserFilterItem title="Active" amount={60} path="/user/active"/>
        <UserFilterItem title="Online" amount={16} path="/user/online"   />
      </div>
      <div className="filter__row">
        <UserFilterItem title="Filtered" amount={43} path="/user/filtered"/>
        <UserFilterItem title="Banned" amount={64} path="/user/banned"/>
      </div>
    </div>
     )
}

export default UsersFilter