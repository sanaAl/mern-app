import React, { createContext ,  useReducer} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
 import Home from './components/Home';
 import About from './components/About';
 import Contact from './components/Contact';
 import Login from './components/Login';
 import Signup from './components/Signup';
 import Logout from './components/Logout';
 import Notfound from './components/Notfound';
 import 'bootstrap/dist/css/bootstrap.css';
 import {Switch} from 'react-router-dom'; 

import {initialState,reducer} from '../src/reducer/UseReducer';
  
 export const UserContext= createContext();
 const App = () => {
   const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
 <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Switch>
    <Route  exact path="/"><Home/></Route>
    <Route  exact path="/about"><About/></Route>
    <Route  exact path="/contact"><Contact/></Route>
    <Route  exact path="/login"><Login/></Route>
    <Route  exact path="/signup"><Signup/></Route>
    <Route  exact path="/logout"><Logout/></Route>
    <Route><Notfound/></Route></Switch>
 </UserContext.Provider>
    </>
  ) 
}

export default App
