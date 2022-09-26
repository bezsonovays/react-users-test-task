import React from 'react';
//components
import UnresolvedTickets from '../../UnresolvedTickets/UnresolvedTickets'
import Tasks from '../../Tasks/Tasks';
//css
import './Taskboard.css';

const Taskboard = () => {
  return (
    <div className="taskboard">
      <UnresolvedTickets/>
      <Tasks/>
    </div>
  )
}

export default Taskboard