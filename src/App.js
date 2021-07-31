import React from 'react';
import './style.css';
import { Router } from "@reach/router";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import SinglePost from "./components/dashboard/posts/SinglePost";
import CreatePost from "./components/dashboard/posts/CreatePost";
import AppProvider from "./components/context/AppProvider";
import Posts from "./components/dashboard/posts/Posts";

class App extends React.Component {

	render() {
		return (
			<AppProvider>
				<Router>
					<Login path="/"/>
					<Dashboard path="/dashboard"/>
					<Posts path="/dashboard/posts"/>
					<CreatePost path="/dashboard/create-post"/>
					<SinglePost path="/dashboard/post/:id"/>
				</Router>
			</AppProvider>
		);
	}
}

export default App;