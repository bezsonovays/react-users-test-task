import React from 'react';
//components
import './../UI/Taskboard/Taskboard.css';
import './Tasks.css';
import Sticker from'../UI/Sticker/Sticker';
//icons
import { ReactComponent as  Plus } from './icons/plus.svg';


const Tasks = () => {
  return (
      <article className="tasks">
        <header className="tasks-header">
            <div className="tasks__row tasks__row-header">
                <h3 className="tasks__title">Tasks</h3>
                <a href="#" className="tasks__details">View details</a>
            </div>
            <div className="tasks__subtitle">Today</div>
        </header>
        <div className="tasks__container">
            <div className="tasks__row task task__new">
                <div className="tasks__name">Create new task</div>
                <div className="tasks__btn">
                    <div className="tasks__btn-create">
                        <Plus/>
                    </div>
                </div>
            </div>
            <div className="tasks__row task">
                <div className="tasks__name">
                     <div className="radio">
                        <input 
                            className="custom-radio"
                            type="radio"
                            id="task-1"
                            name="task"
                            />
                        <label htmlFor="task-1">Finish ticket update</label>
                    </div>
                </div>
                <div className="tasks__btn">
                    <Sticker bg="#FEC400" color="#fff" text="Urgent"/>
                </div>
            </div>
            <div className="tasks__row task">
                <div className="ticket__name">
                    <div className="radio">
                        <input 
                            className="custom-radio"
                            type="radio"
                            id="task-2"
                            name="task"
                           />
                        <label htmlFor="task-2">Create new ticket example</label>
                    </div>
                </div>
                <div className="ticket__btn">
                    <Sticker bg="#29CC97" color="#fff" text="New"/>
                </div>
            </div>
            <div className="tasks__row task">
                <div className="ticket__name">
                    <div className="radio">
                        <input 
                            className="custom-radio"
                            type="radio"
                            id="task-3"
                            name="task"
                            />
                        <label htmlFor="task-3">Update ticket report</label>
                    </div>
                </div>
                <div className="ticket__btn default">
                    <Sticker bg="#F0F1F7" color="#9FA2B4" text="Default"/>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Tasks