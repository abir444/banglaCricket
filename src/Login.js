import React, { Component } from "react";
import './App.css';
class Login extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      toggler: true,
      userName: [],
      password: [],
    };
    
  }
  
  onRegister(event) {
    event.preventDefault();

    //Calling your onSubmit props
    this.props.onSubmit();

    //Calling the newly created gettingRegisterData
    this.props.authentication(this.state);

    //Here you will get all the state
    //Username, fullname, lastname, email, dob and password

    //so pass it to the parent and you can do it by passing a parameter
    // props
  }

  render() {
    return (
      <div className="AppR">
        <form onSubmit={this.onRegister.bind(this)}>
          <h3>Bangla Cricket Team</h3>
          <div>
            <div>Register</div>
            <input
              type="text"
              placeholder="Username"
              value={this.props.uname}
              // onChange={props.handleChange}
              onChange={event =>
                this.setState({ userName: event.target.value })
              }
              name="uname"
              // required
            />
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              value={this.props.psw}
              //onChange={props.handleChange}
              onChange={event =>
                this.setState({ password: event.target.value })
              }
              name="psw"
              // required
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Login;
