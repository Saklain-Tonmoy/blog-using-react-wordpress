import React from 'react';
import './Style.css';
import { Router } from "@reach/router";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/dashboard/posts/CreatePost";
import AppProvider from "./components/context/AppProvider";
import Posts from "./components/dashboard/posts/Posts";
import Pages from "./components/dashboard/pages/Pages";
import Blogs from "./components/Blogs";
import Page from "./components/Page";

class App extends React.Component {

	render() {
		return (
			<AppProvider>
				<Router>
					<Home path="/"/>
					<Page path="/page/:id"/>
					<Login path="/login"/>
					<Dashboard path="/dashboard"/>
					<Posts path="/dashboard/posts"/>
					<CreatePost path="/dashboard/create-post"/>
					<SinglePost path="/post/:id"/>
				</Router>
			</AppProvider>
		);
	}
}

export default App;