import React, { Component } from 'react';
import './App.css';

class Login extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      uname : '',
      psw   : '',
    };
    this.handleChange=this.handleChange.bind(this);
    this.submit=this.submit.bind(this);
  }

  handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    let data ={};
    data[name]=value;
    this.setState(data);
    console.log(name,value);

  }
  render(){
    return (
      
        <div className = "App">
          <form onSubmit ={this.submit}>
           <h3>Bangla Cricket Team</h3>
           <div>
            <div>Login</div>
            <input type="text" placeholder="Username" value={this.state.uname} name="uname" onChange={this.handleChange}/>
            <br/>
            <input type="password" placeholder="Enter Password" value={this.state.psw} name="psw" onChange={this.handleChange}/>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>  
    )
  }
  submit(e){
    e.preventDefault();
    window.axios.post('/login', {uname:this.state.uname,  psw:this.state.psw}).then(response=>{

    })
  }
 
}


export default Login;
