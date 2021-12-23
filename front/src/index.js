import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Signin from './Signin'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'


ReactDOM.render(
<BrowserRouter>
<Routes>
    <Route path="/">
       <Route path="Login" element={<Login/>}>
        <Route  path="Signin" element={<Signin/>}/>
        <Route path="Signup" element={<Signup/>}/>
       </Route>
       <Route path="Home" element={<Home/>}/>
    </Route>
  </Routes>
</BrowserRouter>
  ,

  document.getElementById('root')
);
