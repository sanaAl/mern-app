import React from "react";
import { NavLink } from "react-router-dom";
import notfound from "./photos/error.png";
const Notfound = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <figure>
            <img src={notfound} alt="notfound " width="500px"/>
          </figure>
        </div>
        <p> The page you are looking for does not exist.
            Are you sure the url is correct?
            How about going back to the homepage? 
              
        </p>
        <NavLink to="/">Back to Home</NavLink>
      </div>
    </>
  );
};

export default Notfound;
