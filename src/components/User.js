import React, { Component } from 'react';

import { browserHistory } from "react-router";

export class User extends Component {
    onNavHome()
    {
        browserHistory.push("/home");
    }
    render(){
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id}</p>
                <br />
                <button className="btn btn-primary" onClick={this.onNavHome}>Go Home!!</button>
            </div>
        );
    }
}