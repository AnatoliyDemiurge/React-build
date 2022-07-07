import React from 'react';
import AppRouter from '../../routers/AppRouter';
import {BrowserRouter} from "react-router-dom";
import "../../assets/style/main.scss"

function WrapperRouter() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default WrapperRouter;