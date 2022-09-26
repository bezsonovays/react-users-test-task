import React from 'react';
//icon
import { ReactComponent as SortIcon } from './sort.svg';
//css
import './Sort.css';

const Sort = (users) => {

  const sortUsers = (users) => {
      console.log('sortUsers')
  }

  return (
    <div className="sort" onClick={sortUsers}>
        <div  className="sort__icon">
            <SortIcon/>
        </div>
        <p className="sort__text">Sort</p>
    </div>
  )
}

export default Sort