import React from 'react';

import { Login } from './pages/Login'
import { Users } from './pages/Users';
import {  UserChart } from './pages/UserChart';

import Global from './styles/Global'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    <>
      <ToastContainer 
        pauseOnHover={false}
      />
      <Global />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:name/:id" component={UserChart}/>
        </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
