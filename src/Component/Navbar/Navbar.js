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
import {useDispatch,useSelector } from "react-redux";
import { logout } from '../../Js/Actions/user';



const Navbar = () => {
	const dispatch = useDispatch(); // Initialisez dispatch
	const isAuth = useSelector((state) => state.userReducer.isAuth);


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

		
		</NavMenu>

		<NavBtn className='btn'>
		</NavBtn>


		
		{isAuth? 		<NavBtnLink to='/profile'> profile </NavBtnLink>
 : null}

	
		{ isAuth?
( 	<NavBtnLink href="/"onClick={()=>dispatch(logout())}>logout </NavBtnLink>
)
:
( <div>
		<NavBtnLink to='/signin'>SignIn </NavBtnLink>
	<NavBtnLink to='/Register'>Register</NavBtnLink>
</div>

	
	
	)
}

	
	

     
</Nav>

	</>

);
};

export default Navbar;
