import React, { useEffect, useState }  from 'react';
//components
import Loader from '../UI/Loader/Loader';
import User from "../UI/User/User";
//hooks
import {useFetchng} from '../../hooks/useFetching';
//helpers
import PostService from '../../API/PostService';
//css
import './AllUsers.css';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [fetchUsers, isUsersLoading, usersError] = useFetchng(async () => {
      const responce = await PostService.getAll();
      setUsers(responce);
  })

  useEffect(() => {
     fetchUsers();
   }, [])

  return (
      <div className="list">
        <div className="list__header">
          <h4 className="list__title">All users</h4>
        </div>
        <div className="list__block">
          <div className="list__row-top columns">
            <div className="list__details list__column-title">User details</div>
              <div className="list__company list__column-title">Company name</div>
              <div className="list__email list__column-title">Email</div>
              <div className="list__distance list__column-title">Distance</div>
              <div className="list__details list__column-title"></div>
            </div>
            {usersError && <h2>Error: {usersError}</h2>}
            <div className="list__users">
              {isUsersLoading 
                ? <Loader/>
                : <>{users.length > 0 && <>{users.map(user => <User key={user.id} user={user}/> )}</>
                    }</>
              }
            </div>
        </div>
      </div>
  )
}

export default AllUsers