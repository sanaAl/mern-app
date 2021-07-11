import React ,{useEffect, useState} from 'react';
import profile from "./photos/profile.png";
import {useHistory} from "react-router-dom";
const About = () => {
const history = useHistory();
const [userData , setUserData] =useState({});

const callAbout = async() =>{
    try{
       const res = await fetch("/about",{
          method: "GET"  ,
          headers :{
              Accept : "application/json" ,
              "Content-Type" : "application/json"
          },
          credentials : "include"
        });
        const data = await res.json();
        console.log(data);
        setUserData(data);

        if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
        }

    } catch(err){
        console.log(err);
        history.push('/login');
    }
}

useEffect(() => {
    
  callAbout();
}, []);
  

    return (
        <>
         <div className="container emp-profile">
             <form method="GET">
                 <div className="row">
                 <div className="col-md-4 mt-3">
                     <img src={profile} alt="profile" width="150px" />
                 </div>
                <div className="col-md-6 mt-3">
                    <div className="profile-head">
                        <h5>{ userData.name }</h5>
                        <h6>{ userData.work }</h6>   
                    </div> 
                </div>
                <div className="row"> 
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>Work Link</p>
                            <a href="https://sanaal.github.io/FoodWeb/" target="_fiverr" >fiverr</a><br/>
                            <a href="https://sanaal.github.io/GlowText-animation" target="_codepen" >codepen</a><br/>
                            <a href="https://sanaal.github.io/noteTaker/" target="_linkedin" >linkedin</a><br/>
                            <a href="https://sanaal.github.io/Smoky-Animation/" target="_youtube" >youtube</a><br/>
                            <a href="https://sanaal.github.io/MyFlipcart/" target="_github" >github</a><br/>
                        </div>
                    </div>

                       <div className="col-md-8 pl-5 about-info">
                           <div className="tab-content profile-tab" id="myTabContent">
                               <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                   <div className="row">
                                       <div className="col-md-6">
                                       <label>USER ID</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{userData._id}</p>
                                       </div>
                                   </div>
                                   <div className="row mt-3 ">
                                       <div className="col-md-6">
                                       <label>Name</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{userData.name}</p>
                                       </div>
                                   </div>
                                   <div className="row mt-3">
                                       <div className="col-md-6">
                                       <label>Email</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{userData.email}</p>
                                       </div>
                                   </div>
                                   <div className="row mt-3">
                                       <div className="col-md-6">
                                       <label>Phone</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{userData.phone}</p>
                                       </div>
                                   </div>
                                   <div className="row mt-3">
                                       <div className="col-md-6">
                                       <label>Profession</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{userData.work}</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div> 

                </div>
             </div>
                    
            </form>
         </div>
        </>
    )
}

export default About ;
