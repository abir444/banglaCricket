import React, { Component } from "react";
import './App.css';
class Login extends Component  {

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
  }
    render(){
    return (
        <div className = "AppL">
          <form onSubmit ={this.props.submit}>
           <h3>Bangla Cricket Team</h3>
           <div>
            <div>Login</div>
            <input type="text" placeholder="Username" value={this.props.uname} name="uname" onChange={this.props.handleChange}/>
            <br/>
            <input type="password" placeholder="Enter Password" value={this.props.psw} name="psw" onChange={this.props.handleChange}/>
            </div>
            <input type="submit" value="Submit" />
            <div> 
              <p>Not having an account?</p>
              {/* <button onClick={()=>{
         this.setState({ toggler : true});
       }}
       >Register To the club
       </button> */}
            </div>
          </form>
        </div>  
  );
};
}

export default Login;
