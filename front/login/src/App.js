import React from 'react'
import Form from './components/form'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {  Routes, Route } from 'react-router';
import Signup from './components/Signup';
import Admin from './components/Admin';
import Login from './components/Login';


const App = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Admin</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <Routes>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Admin' element={<Admin/>}/>
    </Routes>
      
     <Signup />
    </div>
    

  )
}
export default App