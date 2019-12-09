import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      un: [],
      ps: [],
      toggler: false
    };
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
    this.hello = this.hello.bind(this);    
    // this.submit=this.submit.bind(this);
  }

  onRegisterSubmit() {
    // we use this for binding    
  }
hello(){
  console.log("hello boss");
}
  authentication(i){

    let user = this.state.un;
    console.log(user);
    let pass = this.state.ps;
    console.log(pass);
    let userL = i.userName;
    let pswL = i.password;
    console.log(pswL);
    if(user.indexOf(userL)>-1 && pass.indexOf(pswL)>-1  ){
      alert("Welcome")
    }else{
      alert("PLease register and try again !")
    }
  }
  /**
   * Use this function when you register a user so it can add to the list.
   * @param {*} data
   */
  gettingRegisterData(data) {
    //Here you're getting the data
    console.log("GETTING DATA IN APP.JS");
    console.log(data);
    alert('Cheers! Happy membership!!')
    const list = this.state.list;
    const un = this.state.un; 
    const ps = this.state.ps;
    
    let checkU = data.userName;
    let checkP = data.password; 
    if(un.indexOf(checkU)>-1 || ps.indexOf(checkP)>-1 ){
      alert('already exists');
    }else{
    un.push(checkU);
    console.log(un);
    ps.push(checkP);
  }

     this.setState({ list, un , ps});
  }

  render() {
    return (
      <div className="App">
        <div>{/* <Login /> */}</div>
        {this.state.toggler ? <Register 
        onSubmit={this.onRegisterSubmit}
        gettingRegisterData={this.gettingRegisterData.bind(this)}
             
        /> : <Login
        onSubmit={this.onRegisterSubmit}
        authentication={this.authentication.bind(this)}
        />}

        {/* register button */}
          <button onClick={() => {
            this.setState({ toggler: true });
          }}>Register To the club
        </button>
          {/* login button */}
        <button
          onClick={() => {
            this.setState({ toggler: false });
          }}>Back to login!
      </button>
        
        {/* This is just to view how your list looks like */}
        {JSON.stringify(this.state.list)}
        
                {JSON.stringify(this.state.un)}
        
      </div>
    );
  }
}
export default App;