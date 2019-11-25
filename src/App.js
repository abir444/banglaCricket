import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      toggler: "Login"
      // uname : '',
      // fname : '',
      // Lname : '',
      // email : '',
      // psw   : '',
      // date: new Date(),
      //isLogin : false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.submit=this.submit.bind(this);
  }

  //TODO: This is supposed to be a onSubmit function and not onChange

  // So call this onSubmit function on your Submit button in Register
  // Also name it onRegisterSubmit (it's more descriptive)
  // This will make your code more readable

  //TODO: Also I would like to see just Login or just Register at a time
  // so utilize the state "toggler", when you click on Register, you can see just register

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    let list = [];
    let data = [];
    // let d =  new Date();
    data[name] = value;
    list.push({
      userName: value.uname,
      fullName: value.fname,
      lastName: value.lname,
      email: value.email,
      dob: value.date,
      password: value.psw
    });
    this.setState(
      {
        list: event
      },
      console.log(event)
    );
  }

  render() {
    return (
      <div className="App">
        <div>
          <Login />
        </div>
        <div>
          <Register />
        </div>
        {/* This is just to view how your list looks like */}
        {JSON.stringify(this.state.list)}
      </div>
    );
  }
}
export default App;
