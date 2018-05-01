import React, { Component } from 'react';
import {BrowserRouter,
    Route,
    Link} from 'react-router-dom';



import HomePage from './components/pages/homePage.js';
import LoginPage from './components/pages/loginPage.js';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            </div>
            </BrowserRouter>
    );
    }
}

export default App;
