import React, { Component } from 'react'

export class HomeTitle extends Component {
    render() {
        return (
            <div>
                <marquee style={{fontSize:"35px", fontWeight:600, color:"Green"}} width="70%" direction="left" height="50px">
                    This is a React Blog App using Wordpress CMS as a backend.
                </marquee>
            </div>
        )
    }
}

export default HomeTitle;
