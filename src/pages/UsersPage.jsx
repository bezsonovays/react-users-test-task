import React from 'react';
import AllUsers from '../components/AllUsers/AllUsers';
import PageHeader from '../components/UI/PageHeader/PageHeader';
import UserFilter from '../components/UsersFilter/UsersFilter';
import Taskboard from '../components/UI/Taskboard/Taskboard';


const UsersPage = () => {
  return (
    <div className="users page">
      <div className="container">
        <header className="users__header">
            <PageHeader title="Users"/>
        </header>
        <section className="users__filter">
          <UserFilter/>
        </section>
        <section className="users__list">
          <AllUsers/>
        </section>
        <section className="users__taskboard">
           <Taskboard/>
        </section>
      </div>
    </div>
  )
}

export default UsersPage;