import { Redirect } from '@reach/router';
import axios from 'axios';
import React from 'react'
import Navbar from './Navbar'

export class Login extends React.Component {

    constructor( props ) {
        super ( props );

        this.state = {
            username: '',
            password: '',
            userNiceName: '',
            userEmail: '',
            loggedIn: 'false',
            loading: 'false',
            error: ''
        };
    }

    onFormSubmit = ( event ) => {

        event.preventDefault();

        const siteUrl = 'http://localhost/wordpress-blog';

        const loginData = {
            username: this.state.username,
            password: this.state.password
        };

        this.setState( { loading: true }, () => {
            axios.post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData)
            .then( res => {
                console.warn( res.data );
                if( undefined === res.data.token) {
                    this.setState( { loading: false, error: res.data.message } );
                    return;
                }

                localStorage.setItem( 'token', res.data.token );
                localStorage.setItem( 'userName', res.data.user_nicename);
                localStorage.setItem( 'userEmail', res.data.user_email);

                this.setState( {
                    loading: false, 
                    token: res.data.token,
                    userNiceName: res.data.user_nicename,
                    userEmail: res.data.user_email,
                    loggedIn: true
                })
            })
            .catch( error => {
                console.warn( error.response.data);
                this.setState( { error: error.response.data, loading: false } );
            })
        })
    }

    handleOnChange = ( event ) => {
        this.setState( { [event.target.name]: event.target.value } )
    }

    render() {

        const { username, password, loggedIn, userNiceName } = this.state;

        const user = userNiceName ? userNiceName : localStorage.getItem( 'userName');

        if( loggedIn || localStorage.getItem( 'token' )) {
            return <Redirect to={`/dashboard/${user}`} noThrow />
        } else {
            return (
                <div>
                    <Navbar/>
                    <form className="login-form" onSubmit={ this.onFormSubmit }>
                        <label className="form-group">
                            Username:
                            <input 
                                type="text" 
                                className="form-control" 
                                name="username"
                                value={ username } 
                                onChange={ this.handleOnChange }
                            />
                        </label>
                        <br/>
                        <label className="form-group">
                            Password:
                            <input 
                                type="password"
                                className="form-control"
                                name="password"
                                value={ password }
                                onChange={ this.handleOnChange }
                            />
                        </label>
                        <br/>
                        <button className="btn btn-primary mb-3" type="submit">Login</button>
                    </form>
                </div>
            )
        }
    }
}

export default Login;
