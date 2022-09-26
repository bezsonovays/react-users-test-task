import React from 'react';
//icons
import User from './icons/user.jpg';
import {ReactComponent as Search} from './icons/search.svg';
import {ReactComponent as Notification} from './icons/notification.svg';
//css
import './LoggeeInUser.css';

const LoggedInUser = () => {
  return (
    <section className="l-user">
        <div className="l-user__panel">
            <div className="l-user__search">
                <Search/>
            </div>
            <div className="l-user__notification">
                <Notification/>
            </div>
        </div>
        <div className="l-user__info">
            <h4 className="l-user__name">Jones Ferdinand</h4>
            <div className="l-user__img">
                <img src={User} alt="Jones Ferdinand" />
            </div>
        </div>
    </section>
  )
}

export default LoggedInUser;