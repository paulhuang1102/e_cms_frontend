import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './sass/style.sass';
import App from './containers/App';
import store from './store';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

render(
    <Provider store={store}><App /></Provider>,
    window.document.getElementById('app'));
