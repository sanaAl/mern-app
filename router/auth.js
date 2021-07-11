const jwt =require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../db/connect');
const User = require('../model/userSchema');


 router.post('/register',async (req,res)=>{
     const{name,email,phone,work,password,cpassword} = req.body;
     
     if(!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({ error: "kindly fill them"});
     }
    try{
    const userExist = await User.findOne({email:email});
         if(userExist){
            return res.status(422).json({ error: "email already exist"});
         }
         else if(password != cpassword){
            return res.status(400).json({ error: "password doesn't match"});
         }
         const user =new User({name,email,phone,work,password,cpassword});
             

          await user.save();

         res.status(201).json({message:'user registered succesfully'});
 } catch(err){
     console.log(err);
     }
    });
//   route for login
router.post('/signin', async (req,res)=>{

try {
    let token;
    const{email,password} =req.body;
if(!email || !password){
    return res.status(400).json({ error: "kindly fill the data"});
}
const userLogin = await User.findOne({email:email});

if(userLogin){
    const isMatch = await bcrypt.compare(password,userLogin.password);

     token = await userLogin.generateAuthToken();
    res.cookie("jwtoken",token,{
    expires: new Date(Date.now() + 25892000000),
    httpOnly:true
});
    if(!isMatch){
        res.status(400).json({error:'invalid'});
    }else{
        res.json({message:'user sign in successfully'});
    }
}else{
    res.status(400).json({error:'invalid'});
}


} catch (err) {
    console.log(err);
}
});

router.get("/about",authenticate ,(req, res) => {
    res.send(req.rootUser);
  });

  router.get("/getdata",authenticate ,(req, res) => {
    res.send(req.rootUser);
  });

  router.post("/contact",authenticate ,async (req, res) => {
   try {
       const {name,email,phone,message} = req.body;
       if(!name || !email || !phone || !message){
           console.log('error in contact form');
           return res.json({error:'Kindly fill the form'})
       }
       const userContact = await User.findOne({_id:req.userID});
       if(userContact){
           const userMessage = await userContact.addMessage(name,email,phone,message);
           await userContact.save();
           res.status(201).json({message:'user contact succcessfully'});
       }
   } catch (error) {
       console.log(error);
   }
  });

  router.get("/logout",(req, res) => {
      res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send('User logout');
  });


module.exports = router; 