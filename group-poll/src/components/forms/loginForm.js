import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Form, Button} from 'semantic-ui-react';
import propTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../messages/inlineError.js';
class LoginForm extends Component {
    state = {
        data:{
            email:"",
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

        if(data.email===undefined){
            data.email='';
        }
        if(data.password===undefined){
            data.password='';
        }

        if(!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
        if(!data.password) errors.password = 'You must fill your password';

        return errors;
    };
    render() {
        const {data, errors} = this.state;
        return (

            <Form onSubmit={this.onSubmit}>
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
                    <Link to='/resetPass' exact >Forget Password?</Link>
                <Button primary>Login</Button>
            </Form>

    );
  }
}


LoginForm.propTypes = {
    submit: propTypes.func.isRequired
};


export default LoginForm;
