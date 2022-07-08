import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import { useAuth } from '../hooks/userAuth';
import { authRoutes, publicRoutes } from './routes';
import {useSelector} from 'react-redux';

const LoginCheckRouter = () => {
    let user = useAuth()
    return (
        <Routes>
            {
            
            user.isAuth && authRoutes.map(
                ({ path, Component }) => 
                <Route key={path} path={path} element={<Component/>} exact />   
            )}
            {publicRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    )
}

export default LoginCheckRouter;