import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Request from 'superagent';
import LoginForm from '../forms/loginForm.js';
class LoginPage extends Component {
    state = {
        users:[]
    };
    submit = (data) =>{
        console.log(data);
        var url = `http://localhost:3030/users`;


        Request.post(url)
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(data))
            .then((response) =>{
                this.setState({
                    users: response.body.toString()
                });
            });
    };
    render() {
        return (


            <div className="ui form">
            <h1>Login</h1>
            <LoginForm submit={this.submit} />
            <Link to='/register' exact >Register</Link>
            <div>
            {this.state.users}
            </div>
        </div>

    );
    }
}

export default LoginPage;
