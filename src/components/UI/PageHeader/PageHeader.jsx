import React from 'react';
//components
import LoggedInUser from '../LoggedInUser/LoggedInUser';
//css
import './PageHeader.css';

const PageHeader = ({title}) => {
  return (
    <div className="header">
        <h1 className="header__title title">{title}</h1>
        <div className="header__l-user">
          <LoggedInUser/>
        </div>
    </div>
  )
}

export default  PageHeader
;