import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import { useAuth } from '../hooks/userAuth';
import { authRoutes, publicRoutes } from './routes';
import { store } from '../store';
import Wrapper from '../containers/Wrapper/Wrapper';
const LoginCheckRouter = () => {
    return (
        <Routes>
            {
            publicRoutes.map(
                ({ path, Component }) => 
                    <Route 
                        key={path} 
                        path={path} 
                        element={<Component/>} 
                        exact
                    />
            )}
            {
            store.getState().user.isAuth && authRoutes.map(
                ({ path, Component }) =>
                <Route element={<Wrapper/>} path="/">
                    <Route 
                            key={path} 
                            path={path} 
                            element={<Component/>} 
                            exact 
                        />
                </Route> 
                    // </Route>
            )}
            <Route path="*" element={<Navigate to ="/login" />}/>
        </Routes>
    )
}

export default LoginCheckRouter;