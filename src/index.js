import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './sass/style.sass';
import SignIn from './components/SignIn';
import Creator from './components/Creator';

const apiUrl = 'http://localhost:3000';
render(
    <Router>
        <div className="container">
            <Route exact path="/" render={props => <SignIn {...props} api={apiUrl} />} />
            <Route path="/godMode" render={props => <Creator {...props} api={apiUrl} />} />
        </div>
    </Router>,
    window.document.getElementById('app'));
