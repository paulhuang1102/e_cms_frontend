import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/style.sass';
import SignIn from './components/SignIn';
import Creator from './components/Creator';
import Main from './components/manager/Main';
// import Dashboard from './components/Dashboard';

const apiUrl = 'http://localhost:3000';
render(
    <Router>
        <Switch>
            <Route exact path="/" render={props => <SignIn {...props} api={apiUrl}/>} />
            <Route path="/godMode" render={props => <Creator {...props} api={apiUrl}/>} />
            <Route path="/manager" render={props => <Main {...props} api={apiUrl}/>} />
        </Switch>
    </Router>,
    window.document.getElementById('app'));
