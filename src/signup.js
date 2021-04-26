import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import login from './login';
import './signup.css';
class signup extends Component {
  render() {
    return (
        <div className="login-page">
        <div className="form">
            <h2>Register</h2>
          
          <form className="login-form">
            <input type="text" placeholder="firstname"/>
            <input type="text" placeholder="lastname"/>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="password"/>
            <button>Register</button>
            <p class="message">Already registered? 
            <Link className="nav-link" to={"/login"}>Login</Link>
                
                <Switch>
            <Route exact path='/' component={login} />
            
          </Switch>
          </p>
          </form>
          </div>
          </div>
    );
  }
}

export default signup;