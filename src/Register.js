//import React from "react";
import "./App.css";
import DateTimePicker from "react-datetime-picker";
import App from "./App";
import React, { Component } from "react";
//import DateTimePicker from "react-datetime-picker";

//TODO: Change this to a class component
// onChange should be here
// Create state for every values.
// this.state = {
//   username,
//   firstName
//   lastName
//   email
//   password
//   date
// }

// Look on Stackoverflow how to setState onChange
// Here is the answer though, but try to look first online
// Example onChange={(event)=> this.setState(username:event.target.value)}

// In your onSubmit call that props.onRegisterSubmit, and you will need to pass
// appropriate data

class Register extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
     toggler: true,
      userName: "",
      fullName: "",
      lastName: "",
      email: "",
      dob: "",
      password: "",
      
    };
    console.log('test ::::'+this.state);
    //this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
     //this.submit=this.submit.bind(this);
  }


render(){
  return (
    <div className="AppR">
      <form onSubmit={this.props.onRegisterSubmit}>
        <h3>Bangla Cricket Team</h3>
        <div>
          <div>Register</div>
          <input
            type="text"
            placeholder="Username"
            value={this.props.uname}
            // onChange={props.handleChange}
            onChange={(event)=> this.setState({userName:event.target.value})}
            name="uname"
            required
          />
          <br />
          <input
            type="text"
            placeholder="First Name"
            value={this.props.fname}
            //onChange={props.handleChange}
            onChange={(event)=> this.setState({fullName:event.target.value})}
            name="fname"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={this.props.lname}
            //onChange={props.handleChange}
            onChange={(event)=> this.setState({lastName:event.target.value})}
            name="lname"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            value={this.props.email}
            //onChange={props.handleChange}
            onChange={(event)=> this.setState({email:event.target.value})}
            name="email"
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={this.props.psw}
            //onChange={props.handleChange}
            onChange={(event)=> this.setState({password:event.target.value})}
            name="psw"
            required
          />
          <div>
            <DateTimePicker
              name="date"
              value={this.props.date}
              // handleChange={props.handleChange}
              onChange={(event)=> this.setState({dob:event.target.value})}
            />
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>

  );
};
}
export default Register;
