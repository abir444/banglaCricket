import React from 'react';
import './App.css';
import Register from './Register';

const Login = (props) => {

    return (
      
      
        <div className = "AppL">
          <form onSubmit ={props.submit}>
           <h3>Bangla Cricket Team</h3>
           <div>
            <div>Login</div>
            <input type="text" placeholder="Username" value={props.uname} name="uname" onChange={props.handleChange}/>
            <br/>
            <input type="password" placeholder="Enter Password" value={props.psw} name="psw" onChange={props.handleChange}/>
            </div>
            <input type="submit" value="Submit" />
            <div> 
              <p>Not having an account?</p>
              <a href="./Register">Create One!</a>
            </div>
          </form>
        </div>  
    )

    
    }

export default Login;
