import React from 'react';
import AppRouter from './routers/AppRouter';
import {BrowserRouter} from "react-router-dom";
import { login, test } from './http/userAPI';

function App() {
  login("88888888888","oleg12345!")
  test("foo","bar","1")
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
