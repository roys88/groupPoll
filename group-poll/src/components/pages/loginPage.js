import React, { Component } from 'react';
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
        </div>

    );
    }
}

export default LoginPage;
