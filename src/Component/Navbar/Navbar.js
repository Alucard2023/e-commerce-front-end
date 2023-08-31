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
import { useSelector,useDispatch } from "react-redux";
import { logout } from '../../Js/Actions/user';



const Navbar = () => {
	const isAuth = useSelector((state) => state.userReducer.isAuth);
	const dispatch = useDispatch(); // Initialisez dispatch


return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/'  activeclassname="active">
			Home
		</NavLink>
		<NavLink to='/about'  activeclassname="active">
			About
		</NavLink>
		<NavLink to='/products'  activeclassname="active">
			Products
		</NavLink>
		
		
		<NavLink to='/blogs'  activeclassname="active">
			Blogs
		</NavLink>

		<NavLink to='/Register'  activeclassname="active">
			Register
		</NavLink>
		
		</NavMenu>

		<NavBtn className='btn'>
		<NavBtnLink to='/signin'>SignIn </NavBtnLink>
		</NavBtn>;


        {isAuth ? <Nav.Link href="/profile">Profile</Nav.Link>:null}

	

	{ isAuth?
	( <div > <Nav.Link href="/"onClick={()=>dispatch(logout())} >logout</Nav.Link> </div>)
	:
	( <div>
		<Nav.Link href="/signin">SignIn </Nav.Link>
		<Nav.Link href="/Register">Register</Nav.Link>
	</div>
	
		
		
		)
}
</Nav>
	</>

);
};

export default Navbar;
