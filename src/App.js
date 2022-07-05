import React from 'react';
import AppRouter from './routers/AppRouter';
import {BrowserRouter} from "react-router-dom";
import { login } from './http/userAPI';
import "./assets/style/main.scss"

function App() {
  // login("88888888888","oleg12345!")
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
