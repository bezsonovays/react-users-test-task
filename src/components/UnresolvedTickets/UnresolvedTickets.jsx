import React from 'react';
//components
import './../UI/Taskboard/Taskboard.css'

const UnresolvedTickets = () => {
  return (
        <article className="tasks">
            <header className="tasks-header">
                <div className="tasks__row tasks__row-header">
                    <h3 className="tasks__title">Unresolved tickets</h3>
                    <a href="#" className="tasks__details">View details</a>
                </div>
                <div className="tasks__subtitle">Group: <span>Support</span></div>
            </header>
            <div className="tasks__container">
                <div className="tasks__row task">
                    <div className="tasks__name">Waiting on Feature Request</div>
                    <div className="tasks__amount">4238</div>
                </div>
                <div className="tasks__row task">
                    <div className="tasks__name">Awaiting Customer Response</div>
                    <div className="tasks__amount">1005</div>
                </div>
                <div className="tasks__row task">
                    <div className="tasks__name">Awaiting Developer Fix</div>
                    <div className="tasks__amount">914</div>
                </div>
                <div className="tasks__row task">
                    <div className="tasks__name">Pending</div>
                    <div className="tasks__amount">281</div>
                </div>
            </div>
        </article>
  )
}

export default UnresolvedTickets