import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './App.css';
import Login from './Login';
import Register from './Register';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list : [],
      // uname : '',
      // fname : '',
      // Lname : '',
      // email : '',
      // psw   : '',
      // date: new Date(),
      //isLogin : false,  
    };
   
    
    this.handleChange=this.handleChange.bind(this);
    //this.submit=this.submit.bind(this);
  }
 /////////////////////////////

 ///////////////////////////


  handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    let list = [];
    let data =[];
   // let d =  new Date();
    data[name]=value;
    list.push({
      userName : value.uname,
      fullName : value.fname,
      lastName : value.lname,
      email    : value.email,
      dob      : value.date,
      password : value.psw,

    });
    console.log(list);

    this.setState(data);
    console.log(name,value);

  }

  render() {
    return (
    
        <div className = "App">
        <div>
        <Login/>
        </div>
        <div>
        <Register/>
        </div>
        </div>
 
      
    );
  }
}




export default App;
