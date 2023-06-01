import React from "react";
import { Link } from "react-router-dom";
export  const Navbar =() => {
      return(
        <navbar className = "Navbar">
       <Link to="/"> <img className="logo-image" src = "./mainlogo.png " alt="image not found"></img></Link> 
        <div className="sideBar">
        <Link className="sideBar-info" to="/login">Login</Link>
        <Link className="sideBar-info" to ="/Registration" >Sign up</Link>
        <Link className="sideBar-info" to="/about"  >About</Link>
        <Link className="sideBar-info"  to="/help"  >Help</Link>
        <Link className="sideBar-info"  to="/contactus"    >Contact Us</Link>
        <div>
          <img src="./hamburger.png"  className="hamburger"/>
        </div>
        </div> 
        </navbar>
      )  ;
};