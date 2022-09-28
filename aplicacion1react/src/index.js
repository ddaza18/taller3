import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './index.css';
import Login from './pages/Login';
import Habitaciones from './pages/Habitaciones';
import Habitacion from './pages/Habitacion';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/users/' element={<Users/>}></Route>
      <Route path='/user-card/' element={<CardUser/>}></Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/habitaciones' element={<Habitaciones/>}/>
      <Route path='/habitaciones/:id' element={<Habitacion/>}/>
      <Route path='*' element={<Error404/>}/>
      <Route path='/home' element={<Navigate replace to="/"/>}/>
    </Routes>
    </BrowserRouter>
);

