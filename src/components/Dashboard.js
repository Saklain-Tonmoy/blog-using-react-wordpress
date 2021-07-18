import React, { Component } from 'react'
import Navbar from './Navbar'

export class Dashboard extends Component {
    render() {
        //const userName = localStorage.getItem( 'userName' );
        return (
            <div>
                <Navbar/>
                <h2>Welcome {this.props.userName}!</h2>
                {/* <h2>Welcome {userName}!</h2> */}
            </div>
        )
    }
}

export default Dashboard;
