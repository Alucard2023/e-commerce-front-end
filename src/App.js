import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Blogs from './pages/Blogs';
import Register from './pages/Register';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './Component/Navbar/Navbar';
import Signin from './pages/Signin';
import Products from './pages/Products';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/home'  element={<Home/>} />
		<Route path='/about' element= {<About/>} />
		<Route path='/products' element={<Products/>}/>
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/Register' element={<Register/>} />
		<Route path='/signin' element={<Signin/>}/>
	</Routes>
	</Router>
 
);
}

export default App;
