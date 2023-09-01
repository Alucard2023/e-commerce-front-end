import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Blogs from './pages/blogs/Blogs';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Home from './pages/home/Home';
import Navbar from './Component/Navbar/Navbar';
import Signin from './pages/signin/Signin';
import Products from './pages/Products/Products';
import RegisterAdmin from './pages/Register/RegisterAdmin';
import Error from './pages/Error/Error';
import Profile from './pages/Profile/Profile';








function App() {

  return (
         <div>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/register' element={<Register />} />
        <Route path="/*" element={<Error/>} />
        <Route path='/signin' element={<Signin />} />
        <Route path="/Admin" element={<RegisterAdmin />} />
        <Route path="/profile" element={<Profile/>}/>


        
      </Routes>
      
      </div>
  );
}

export default App;
