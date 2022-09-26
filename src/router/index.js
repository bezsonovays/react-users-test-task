import TestPage from "../pages/TestPage";
import UsersPage from "../pages/UsersPage";
import UserIdPage from "../pages/UserIdPage";

export const routes = [
    {id: 1, path: '/overview', component: <TestPage/>},
    {id: 2, path: '/users', component: <UsersPage/>},
    {id: 3, path: '/users/active', component: <UsersPage/>},
    {id: 4, path: '/users/online', component: <UsersPage/>},
    {id: 5, path: '/users/filtered', component: <UsersPage/>},
    {id: 6, path: '/users/banned', component: <UsersPage/>},
    {id: 7, path: '/users/:id', component: <UserIdPage />},
    {id: 8, path: '/ideas', component: <TestPage/>},
    {id: 9, path: '/contacts', component: <TestPage/>},
    {id: 10, path: '/agents', component: <TestPage/>},
    {id: 11, path: '/articles', component: <TestPage/>},
    {id: 12, path: '/settings', component: <TestPage/>},
    {id: 13, path: '/subscription', component: <TestPage/>},
]