import React, { Component } from 'react';
import {BrowserRouter,
    Route,
    Link} from 'react-router-dom';



import HomePage from './components/pages/homePage.js';
import LoginPage from './components/pages/loginPage.js';
import RegistrationPage from './components/pages/registrationPage';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegistrationPage} />
            </div>
            </BrowserRouter>
    );
    }
}

export default App;
