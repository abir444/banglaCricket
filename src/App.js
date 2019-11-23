import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './App.css';
import Login from './Login';
import Register from './Register';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className = "App">
        <ul>
          <li>
            <Link to ='/Login'>Login</Link>
            <Link to ='/Register'>Register</Link>
            <Link to ='/Home'>Home</Link>
          </li>
        </ul>
        <div>
        <Route path='/login' component = {Login} />  
        <Route path='/register' component = {Register} />  
        </div>  
      

        </div>
 
      </Router>
    );
  }
}




export default App;
