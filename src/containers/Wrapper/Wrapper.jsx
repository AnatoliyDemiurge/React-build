import React from 'react';
import AppRouter from '../../routers/AppRouter';
import "../../assets/style/main.scss"
import { Outlet } from 'react-router';

function Wrapper() {
  return (
      <div>
        <h1>Test</h1>
        <Outlet></Outlet>
      </div>
  );
}

export default Wrapper;