import React,{useState,useContext} from 'react';
import { NavLink ,useHistory} from "react-router-dom";
import login from "./photos/login.png";
import { UserContext } from '../App';

const Login = () => {
  const {state,dispatch} = useContext(UserContext);
  const history = useHistory();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const loginUser =async(e)=>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method:'POST',
      headers: {
        "Content-Type" :"application/json"
       },
       body:JSON.stringify({
          email , password
               })    
    });
    const data =await res.json();

    if(res.status===400 || !data){
      window.alert("Invalid Credentials");
     
    }else{
      dispatch({type:"USER",payload:true})
     window.alert("Login Successfully ");
     history.push("/");
    }
 
  }

    return (
        <>
            <section>
      <section className="signin"></section>
      <div className="container mt -5">
        <div className="signin-content">

        <div className="signin-image">
            <figure>
              <img src={login} alt="login " width="400px" />
            </figure>
            <NavLink to="/signup" className="signin-image-link">
              create an account
            </NavLink>
          </div>

          <div className="signup-form">
            <h2 className="form-title">SignIn</h2>
            <form method='POST' className="register-form" id="register-form">
              
              <div className="form=group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="your email"
                />
              </div>
             
              
              <div className="form=group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="password "
                  id="password "
                  autoComplete="off"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="your password"
                />
              </div>
              

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Log In "
                  onClick={loginUser}
                />
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </section>
        </>
    )
}

export default Login
