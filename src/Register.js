import React, { Component } from 'react';
import './App.css';
import DateTimePicker from 'react-datetime-picker';
class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uname : '',
      fname : '',
      Lname : '',
      email : '',
      psw   : '',
      date: new Date(),
    };
    
    this.handleChange=this.handleChange.bind(this);
    //this.submit=this.submit.bind(this);
  }

  handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    let data ={};
    data[name]=value;
    this.setState(data);
    console.log(name,value);

  }


  render() {
    return (
      
        <div className = "App">
          <form>
           <h3>Bangla Cricket Team</h3>
           <div>
            <div>Register</div>
            <input type="text" placeholder="Username" value={this.state.uname} onChange={this.handleChange} name="uname" required/>
            <br/>
            <input type="text" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} name="fname" required/>
            <br/>
            <input type="text" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange}  name="lname" required/>
            <br/>
            <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange}  name="email" required/>
            <br/>
            <input type="password" placeholder="Enter Password" value={this.state.psw} onChange={this.handleChange}  name="psw" required/>
            <div>
            <DateTimePicker name = "date" value={this.state.date}
             handleChange={this.handleChange}
            
            />
            </div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        
        </div>
 
      
    );
  }
}




export default Register;
