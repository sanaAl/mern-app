import React , {useState} from "react";
import signup from "./photos/signup.png";
import { NavLink, useHistory } from "react-router-dom";


const initialValues={
  name:'',
  email:'',
  phone:'',
  work:"",
  password:"",
   cpassword:""
}


const Signup = () => {
const history = useHistory();
const [user,setUser] = useState(     
  initialValues
  // name:"",email:"",phone:"",work:"",password:"", cpassword:""
);
const{name,email,phone,work,password,cpassword} = user;

// let name,value;

const handleInputs=(e)=>{
  console.log(e);
  // name= e.target.name;
  // value= e.target.value;

  setUser({...user,[e.target.name]:e.target.value});
}

const PostData = async(e)=>{
   e.preventDefault();
  //  const{name,email,phone,work,password,cpassword} = user;
   const res = await fetch("/register",{
     method: "POST",
     headers: {
       "Content-Type" :"application/json"
      },
      body:JSON.stringify({
        name , email , phone , work , password , cpassword
      })    
   });
   const data =await res.json();

   if(res.status===422 || !data){
     window.alert("Invalid Registraion");
     console.log('Invalid Registraion');
   }else{
    window.alert("Successfull  Registraion");
    console.log('Successfull Registraion');
    history.push("/login");
   }
}

  return (
    <section>
      <section className="signup"></section>
      <div className="container mt -5">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title" >Sign-Up</h2>
            <form  method ="POST" className="register-form" id="register-form">
              <div className="form=group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  // name="name"
                  id="name"
                  autoComplete="off"
                  // value={user.name}
                  // onChange={handleInputs}
                  onChange={(e)=>handleInputs(e)} name="name" value={name}
                  placeholder="your name"
                />
              </div>

              <div className="form=group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input
                  type="email"
                  // name="email"
                  id="email"
                  autoComplete="off"
                  // value={user.email}
                  // onChange={handleInputs}
                    onChange={(e)=>handleInputs(e)} name="email" value={email}
                  placeholder="your email"
                />
              </div>
              <div className="form=group">
                <label htmlFor="phone">
                  <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input
                  type="number"
                  // name="phone"
                  id="phone"
                  autoComplete="off"
                  // value={user.phone}
                  // onChange={handleInputs}
                  onChange={(e)=>handleInputs(e)} name="phone" value={phone}
                  placeholder="your phone number"
                />
              </div>
              <div className="form=group">
                <label htmlFor="work">
                  <i className="zmdi zmdi-slideshow material-icons-name"></i>
                </label>
                <input
                  type="text"
                  // name="work"
                  id="work"
                  autoComplete="off"
                  // value={user.work}
                  // onChange={handleInputs}
                  onChange={(e)=>handleInputs(e)} name="work" value={work}
                  placeholder="your professional"
                />
              </div>
              <div className="form=group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  // name="password "
                  id="password "
                  autoComplete="off"
                  // value={user.password}
                  // onChange={handleInputs}
                  onChange={(e)=>handleInputs(e)} name="password"
                   value={password}
                  placeholder="your password"
                />
              </div>
              <div className="form=group">
                <label htmlFor="cpassword">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  //  name="cpassword"
                   id="cpassword "
                  autoComplete="off"
                  //  value={user.cpassword} 
                  // onChange={handleInputs}
                  onChange={(e)=>handleInputs(e)} name="cpassword" value={cpassword}
                   placeholder="confirm your password"
                />
              </div>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="register"
                   onClick={PostData}
                  // onClick={()=>handleInputs()}
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src={signup} alt="registration"  width="400px"/>
            </figure>
            <NavLink to="/login" className="signup-image-link">
              Registered already
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
