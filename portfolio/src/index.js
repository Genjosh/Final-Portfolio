import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'reactstrap';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
