import {  Route,  Routes , Link } from "react-router-dom";
import './App.css' ; 
import React from "react";
import {Login} from "./Components/Login";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import About from "./Components/About";
import Help from "./Components/Help";
import LoggedUser from "./Components/LoggedUser";
import Contacts from "./Components/Contacts";
import MedicalStoresComponent from "./Components/MedicalStoresComponent";
import DepressionContent from "./Components/DepressionContent";
import DetailsMedicine from "./Components/DetailsMedicine";

function App() {
  return (
    <router>
    <div className="App">    
     <Routes>
      <Route path="" element ={<Home />} ></Route>
      <Route path="/login"  element={<Login />} />
      <Route path="/registration"  element={<Registration />} />
      <Route path="/about" element = { <About /> } />
      <Route  path="/help" element = {<Help />} />
      <Route path="/user" element = {<LoggedUser />} />
      <Route path="/contactus" element ={<Contacts />} />
      <Route path = "/medicalsnearyou"  element = { <MedicalStoresComponent /> } />
      <Route path = "deprresiondetails" element = {<DepressionContent /> } />
      <Route path = '/meddetails' element  = { <DetailsMedicine />} />
      
     </Routes>
     </div>
      </router>
  );
}

export default App;
