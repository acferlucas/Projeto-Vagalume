import { Login } from './pages/Login'
import { Users } from './pages/Users';
import {  UserChart } from './pages/UserChart';

import Global from './styles/Global'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { TokenContextProvider } from './contexts/TokenContext'


function App() {
  
  return (
    <>
      <ToastContainer 
        pauseOnHover={false}
      />
      <Global />
      <BrowserRouter>
        <Switch>
          <TokenContextProvider>
            <Route path="/" exact component={Login} />
            <Route path="/users" exact component={Users} />
            <Route path="/users/:name/:id" component={UserChart}/>
          </TokenContextProvider>
        </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
