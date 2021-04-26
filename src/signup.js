import React, { Component } from 'react';
import './App.css';
class signup extends Component {
  render() {
    return (
        <form>
        <h3>Register</h3>

        <div className="form-group">
            <label className="fname">First name</label><br/>
            <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
            <label>Last name</label><br/>
            <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
            <label>Email</label><br/>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label><br/>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit">Register<hr/>
        <p className="forgot-password text-right">
            Already registered <a href="#">log in?</a>
        </p>
        </button>
    </form>
    );
  }
}

export default signup;