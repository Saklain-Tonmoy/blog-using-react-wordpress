import React, { useContext } from 'react';
import { isLoggedIn } from "../functions";
import ToggleSidebarBtn from "../dashboard/sidebar/ToggleSidebarBtn";
import AppContext from "../context/AppContext";
import NavLink from './NavLink'

const Navbar = () => {

	const [ store, setStore ] = useContext( AppContext );

	const handleLogout = () => {
		localStorage.removeItem( 'token' );
		localStorage.removeItem( 'useName' );

		setStore( {
			...store,
			token: '',
			useName: ''
		} );
		window.location.href = '/';
	};

	return (
		<nav className="navbar my-navbar navbar-expand-lg main-navbar">
			<div >
				<ul className="navbar-nav my-navbar-nav mr-auto">
					{ isLoggedIn() ? (
						<React.Fragment>
							<li className="nav-item">
								<button onClick={ handleLogout } className="btn btn-secondary ml-3">Logout</button>
							</li>
						</React.Fragment>
					) : (
						<li className="nav-item">
							<NavLink to="/login">Login</NavLink>
						</li>
					) }

				</ul>
			</div>
			{/*	If on dashboard page */}
			{ window.location.pathname.includes( 'dashboard' ) ? (
				<ToggleSidebarBtn/>
			) : ''}
		</nav>
	);
};

export default Navbar;