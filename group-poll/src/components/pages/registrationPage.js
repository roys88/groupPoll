import React, { Component } from 'react';
import RegistrationForm from '../forms/registrationFrom';
class RegistrationPage extends Component {

    submit = (data) =>{
        console.log(data);
    };
    render() {
        return (


            <div className="ui form">
            <h1>Regiter</h1>
            <RegistrationForm submit={this.submit} />
        </div>

    );
    }
}

export default RegistrationPage;
