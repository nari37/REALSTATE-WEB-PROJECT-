import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from'./pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './commponents/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/sinup' element={<Signup/>}/>
     </Routes>
    </BrowserRouter>
  )
}
