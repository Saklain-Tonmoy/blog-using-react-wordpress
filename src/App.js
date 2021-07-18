import React from 'react';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import Login from './components/Login';
import {Router} from '@reach/router';
import Dashboard from './components/Dashboard';

export class App extends React.Component {
  render() {
    return(
      <div>
          <Router>
            <Home path="/"/>
            <SinglePost path="/post/:id"/>
            <Login path="/login"/>
            <Dashboard path="/dashboard/:userName"/>
          </Router>
      </div>
    );
  }
}

export default App;
