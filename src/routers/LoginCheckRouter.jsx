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
            <Route path="*" element={<Navigate to ="/login" />}/>
        </Routes>
    )
}

export default LoginCheckRouter;