import React from 'react';
import AppRouter from '../../routers/AppRouter';
import "../../assets/style/main.scss"
import { Outlet } from 'react-router';
import ButtonExit from '../../components/ButtonExit/ButtonExit';

function Wrapper() {
  return (
      <div>
        <ButtonExit></ButtonExit>
        <Outlet></Outlet>
      </div>
  );
}

export default Wrapper;