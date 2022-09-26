import React from 'react';
//router
import { useNavigate } from 'react-router-dom';
//components
import Distance from '../Distance/Distance';
import Details from "../Details/Details"
//icon
import photo from './person8.jpg';
//css
import './User.css';

const User = ({user}) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate({pathname: `/users/${user.id}`, state: { user }})}>
          <article className="user columns">
              <div className="user__details cell name">
                <div className="user__icon">
                  <img src={photo} alt={user.name} />
                </div>
                <div className="user__info ">
                    <h4 className="user__name cell__info">{user.name}</h4>
                    <p className="user__city cell__subinfo">{user.address.city}</p>
                </div>
              </div>
              <div className="user__info cell company">
                <div className="user__company cell__info">{user.company.name}</div>
                <div className="user__bs cell__subinfo">{user.company.bs}</div>
              </div>
              <div className="user__info cell email">
                  <div className="user__email cell__info">
                    {user.email}
                  </div>
                  <div className="user__website cell__subinfo">
                    {user.website}
                  </div>
              </div>
              <div className="user__distance cell distance">
                <Distance lat={user.address.geo.lat} lng={user.address.geo.lng}/>
              </div>
              <div className="user__details cell more"><Details/></div>
          </article>
    
   </div>
  )
} 

export default User