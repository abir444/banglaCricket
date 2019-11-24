import React from 'react';
import './App.css';
import DateTimePicker from 'react-datetime-picker';
const Register = (props) => {



    return (
      
        <div className = "AppR">
          <form onSubmit ={props.submit}>
           <h3>Bangla Cricket Team</h3>
           <div>
            <div>Register</div>
            <input type="text" placeholder="Username" value={props.uname} onChange={props.handleChange} name="uname" required/>
            <br/>
            <input type="text" placeholder="First Name" value={props.fname} onChange={props.handleChange} name="fname" required/>
            <br/>
            <input type="text" placeholder="Last Name" value={props.lname} onChange={props.handleChange}  name="lname" required/>
            <br/>
            <input type="text" placeholder="Email" value={props.email} onChange={props.handleChange}  name="email" required/>
            <br/>
            <input type="password" placeholder="Enter Password" value={props.psw} onChange={props.handleChange}  name="psw" required/>
            <div>
            <DateTimePicker name = "date" value={props.date}
             handleChange={props.handleChange}
            
            />
            </div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        
        </div>
    );
  }





export default Register;
