import React from 'react';
//router
import { Routes, Route} from "react-router-dom";
import UsersPage from '../../../pages/UsersPage.jsx';
import {routes} from "../../../router/index.js";

const NavRouter = () => {
  return (
        <Routes>
              {routes.map(route => 
                 <Route
                   key={route.id}
                   path={route.path} 
                   element={route.component}/>
              )}
                  <Route path="*" element={<UsersPage/>}/>
        </Routes>
  )
}

export default NavRouter