import React from 'react';
import { Login } from './pages/Login'
import { Users } from './pages/Users';
import Global from './styles/Global'

import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
