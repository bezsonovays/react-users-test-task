import React from 'react';
import './UserIdCard.css';
import ava from './images/cat.jpg';

const UserIdCard = ({user: {name,  address, phone, company, website}}) => {
  return (
    <div className="user-id">
        <div className="user-id__header">
            <div className="user-id__img">
                <img src={ava} alt={name} />
            </div>
        </div>
        <div className="user-id__content">
            <div className="user-id__main">
                <h1 className="user-id__name">{name}</h1>
                <p className='user-id__bs'>{company.bs}</p>
            </div>
            <div className="user-id__info">
                <div className="user-id__address block">
                    <h4 className="address__title  block__title">Address</h4>
                    <p className="address__text">
                        {address.street} {address.suite}<br/>
                        {address.city} {address.zipcode} 
                    </p>
                </div>
                <div className="user-id__phone block">
                    <h4 className="phone__title  block__title">Phone</h4>
                    <p className="phone__text">
                        {phone} 
                    </p>
                </div>
                <div className="user-id__website block">
                    <h4 className="website__title  block__title">Website</h4>
                    <a className="website__text" href={`http://${website}`} target="__blank">
                    {website}
                    </a>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default UserIdCard