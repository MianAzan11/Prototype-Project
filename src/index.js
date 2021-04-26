import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
// import Details from './detail'
// import Home from './home'
// import Courses from './courses'
// import Login from './login'
// import Signup from './signup'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
    {/* <Home/> */}
    {/* <Details/> */}
    {/* <Courses/> */}
    {/* <Login/> */}
    {/* <Signup /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
