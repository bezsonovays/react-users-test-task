import React, {useState, useEffect} from 'react';
//router
import { useParams, useLocation } from 'react-router-dom';
//hooks
import { useFetchng } from '../hooks/useFetching';
//helpers
import PostService from '../API/PostService';
//components
import PageHeader from '../components/UI/PageHeader/PageHeader';
import UserFilterItem from '../components/UsersFilter/UsersFilter';
import UserIdCard from '../components/UI/UserIdCard/UserIdCard';

const UserIdPage = () => {
    const param = useParams();
    const {state} = useLocation();
    const [user, setUser] = useState(state?.user);

    const [fetchUserById, isLoading, error] = useFetchng( async (id) => {
            const responce = await PostService.getByID(param.id);
            setUser(responce)
              });

    useEffect(() => {
      if(!state) fetchUserById(param.id);
    }, [])

  return (
    <div className="card page">
        <div className='container'>
           <header className="card__header">
                <PageHeader title="Users"/>
            </header>
            <section className="card__filter">
              <UserFilterItem />
            </section>
            {user &&  
            <section className="card__user">
                <UserIdCard user={user}/>
            </section>}
           
       </div>
    </div>
      
  )
}

export default UserIdPage