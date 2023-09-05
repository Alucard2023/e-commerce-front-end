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
import Profile from './pages/Profile/Profile';
import EditProfile from './Component/EditProfile/EditProfile';
import Editpassword from'./Component/EditProfile/Editpassword';








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
        <Route path='/signin' element={<Signin />} />
        <Route path="/Admin" element={<RegisterAdmin />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/edit/:id" element={<EditProfile />} />
        <Route path='/editpassword/:id' element={<Editpassword/>} />
          


        
      </Routes>
      
      </div>
  );
}

export default App;
