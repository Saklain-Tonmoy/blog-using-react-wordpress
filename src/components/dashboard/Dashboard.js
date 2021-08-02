import React from 'react';
import DashboardLayout from "./../layouts/DashboardLayout";
import { getUserName } from "../functions";

const Dashboard = ( props ) => {

	const userName = ( getUserName() ) ? getUserName() : '';

	return(
		<DashboardLayout>
			<div className="container text-center">
			{ userName ? <h1>Welcome { userName }!!</h1>: '' }
			</div>
		</DashboardLayout>
	)
};

export default Dashboard;