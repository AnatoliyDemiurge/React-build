import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from './routes';

const LoginCheckRouter = () => {
    let isAuth = true
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) => 
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