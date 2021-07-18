import React, { useContext } from 'react';
import NavLink from "../../layouts/NavLink";
import AppContext from "../../context/AppContext";

const SidebarMenu = () => {

	const [ store, setStore ] = useContext( AppContext );

	return (

			<nav id="sidebar" className={ store.sidebarActive ? 'active' : '' }>
				<div className="sidebar-header">
					<NavLink to={ `/dashboard ` }>React with WordPress</NavLink>
				</div>

				<ul className="list-unstyled components">
					<li>
						<NavLink to="/dashboard">Dashboard</NavLink>
						<NavLink to="/dashboard/create-post">Add New Post</NavLink>
						<NavLink to="/dashboard/posts">See Recent Posts</NavLink>
					</li>
				</ul>
			</nav>

	)
};

export default SidebarMenu;