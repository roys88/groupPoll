import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react';
import propTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../messages/inlineError.js';
class RegistrationForm extends Component {
    state = {
        data:{
            firstName:"",
            lastName:"",
            email:"",
            countryCode:"",
            phone:"",
            password:"",
        },

        loading: false,
        errors:{

        }

    };

    onChange = e => this.setState({
        data:{...this.state.data,[e.target.name]:e.target.value}
    });

    onSubmit = () => {

        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    };

    validate = (data) => {
        const errors = {};

        if(data.firstName===undefined){
            data.firstName='';
        }
        if(data.lastName===undefined){
            data.lastName='';
        }
        if(data.email===undefined){
            data.email='';
        }
        if(data.countryCode===undefined){
            data.countryCode='';
        }
        if(data.phone===undefined){
            data.phone='';
        }
        if(data.password===undefined){
            data.password='';
        }

        if(!data.firstName) errors.firstName = 'You must fill your first name';
        if(!data.lastName) errors.lastName = 'You must fill your last name';
        if(!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
        if(!data.countryCode) errors.countryCode = 'You must fill your country code';
        if(!data.phone) errors.phone = 'You must fill your phone number';
        if(!data.password) errors.password = 'You must fill your password';

        return errors;
    };
    render() {
        const {data, errors} = this.state;
        return (

            <Form onSubmit={this.onSubmit}>
    <Form.Field error={!!errors.firstName}>
    <label htmlFor='firstName'>First Name</label>
        <input
        type='text'
        id='firstName'
        name='firstName'
        placeholder='First Name'
        value={data.firstName}
        onChange={this.onChange}
        />
        {errors.email && <InlineError text={errors.firstName} />
        }
    </Form.Field >
        <Form.Field error={!!errors.lastName}>
    <label htmlFor='lastName'>Last Name</label>
            <input
        type='text'
        id='lastName'
        name='lastName'
        placeholder='Last Name'
        value={data.lastName}
        onChange={this.onChange}
        />
        {errors.email && <InlineError text={errors.lastName} />
        }
    </Form.Field >
        <Form.Field error={!!errors.email}>
    <label htmlFor='email'>Email</label>
            <input
        type='email'
        id='email'
        name='email'
        placeholder='example@exmaple.com'
        value={data.email}
        onChange={this.onChange}
        />
        {errors.email && <InlineError text={errors.email} />
        }
    </Form.Field >
        <Form.Field error={!!errors.countryCode}>
    <label htmlFor='countryCode'>Country Code</label>
        <input
        type='text'
        id='countryCode'
        name='countryCode'
        placeholder='Country Code'
        value={data.countryCode}
        onChange={this.onChange}
        />
        {errors.email && <InlineError text={errors.countryCode} />
        }
    </Form.Field >
        <Form.Field error={!!errors.phone}>
    <label htmlFor='phone'>Phone</label>
            <input
        type='text'
        id='phone'
        name='phone'
        placeholder='Phone'
        value={data.phone}
        onChange={this.onChange}
        />
        {errors.email && <InlineError text={errors.phone} />
        }
    </Form.Field >
        <Form.Field  error={!!errors.password}>
    <label htmlFor='password'>Password</label>
            <input
        type='password'
        id='password'
        name='password'
        placeholder='make it secure'
        value={data.password}
        onChange={this.onChange}

        />
        {errors.password && <InlineError text={errors.password} />
        }
    </Form.Field>

        <Button primary>Join</Button>
        </Form>

    );
    }
}


RegistrationForm.propTypes = {
    submit: propTypes.func.isRequired
};


export default RegistrationForm;
