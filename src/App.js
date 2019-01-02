import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, browserHistory, Redirect} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>   
            <Redirect from="/" to="/home"/>
            <Route path={"/"} component={Root}>
                <Route path={"user/:id"} component={User} />
                <Route path={"home"} component={Home} />                       
            </Route>                 
        </Router>
    );
  }
}

export default App;
