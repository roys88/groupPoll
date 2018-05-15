import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Request from 'superagent';
import RegistrationForm from '../forms/registrationFrom';
class RegistrationPage extends Component {
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
            <h1>Register</h1>
            <RegistrationForm submit={this.submit} />
            <div>
                {this.state.users}
            </div>
        </div>

    );
    }
}

export default RegistrationPage;
