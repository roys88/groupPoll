import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../forms/loginForm.js';
class LoginPage extends Component {

    submit = (data) =>{
        console.log(data);
    };
    render() {
        return (


            <div className="ui form">
            <h1>Login</h1>
            <LoginForm submit={this.submit} />
            <Link to='/register' exact >Register</Link>
        </div>

    );
    }
}

export default LoginPage;
