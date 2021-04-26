import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './login.css';
import signup from './signup';
class login extends Component {
  render() {
    return (
        

        

        <div className="login-page">
  <div className="form">
      <h2>Login</h2>
    
    <form className="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered?  rr
      
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                
                <Switch>
            <Route exact path='/' component={signup} />
            
          </Switch>
     
     
    </p>
    </form>
    </div>
    </div>
    );

    }
}
export default login;