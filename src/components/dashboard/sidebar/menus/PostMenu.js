import React, { useContext } from 'react';
import NavLink from "../../../NavLink";
import AppContext from "../../../context/AppContext";

const PostMenu = () => {

	const [ store, setStore ] = useContext( AppContext );

	return(
		<li>
			<NavLink to="/dashboard">Dashboard</NavLink>
			<NavLink to="/dashboard/create-post">Add New Post</NavLink>
		</li>
	)
};

export default PostMenu;