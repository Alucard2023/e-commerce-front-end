import React from 'react';
import "./Navbar.css";
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../Navbar/NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/products' activeStyle>
			Products
		</NavLink>
		
		
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/Register' activeStyle>
			Register
		</NavLink>
		
		</NavMenu>

		<NavBtn className='btn'>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
