import React from 'react';
//components
import NavItem from '../NavItem/NavItem';
//icons
import {ReactComponent as Overview} from './icons/overview.svg';
import {ReactComponent as Users} from './icons/users.svg';
import {ReactComponent as Ideas} from './icons/ideas.svg';
import {ReactComponent as Contacts} from './icons/contacts.svg';
import {ReactComponent as Agents} from './icons/agents.svg';
import {ReactComponent as Articles} from './icons/articles.svg';
import {ReactComponent as Settings} from './icons/settings.svg';
import {ReactComponent as Subscription} from './icons/subscription.svg';
//css
import './Navbar.css';


const Navbar = () => {
  return (
     <nav className="navbar">
        <div className="navbar__section navbar__section-first">
            <NavItem title="Overview" path="/overview">
                <Overview/>
            </NavItem>
            <NavItem title="Users" path="/users" >
                <Users/>
            </NavItem>
            <NavItem title="Ideas" path="/ideas">
                <Ideas/>
            </NavItem>
            <NavItem title="Contacts" path="/contacts">
                <Contacts/>
            </NavItem>
            <NavItem title="Agents" path="/agents">
                <Agents/>
            </NavItem>
            <NavItem title="Articles" path="/articles">
                <Articles/>
            </NavItem>
        </div>
        <div className="navbar__section navbar__section-second">
            <NavItem title="Settings" path="/settings">
                <Settings/>
            </NavItem>
            <NavItem title="Subscription" path="/subscription">
                <Subscription/>
            </NavItem>
        </div>
    </nav>
  )
}

export default Navbar