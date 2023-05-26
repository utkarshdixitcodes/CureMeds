import { BrowserRouter as router, Route,  Routes , Link } from "react-router-dom";
import './App.css' ; 
import {Navbar} from './Components/Navbar'
import React from "react";
// import { ReactDOM } from "react";
// import { useState } from "react";
import {ThemeImage} from "./Components/ThemeImage"
import {Search} from "./Components/Search"
// import { SmallComponent } from './Components/SmallComponent';
// import MedsData from './smallComponentData';
import {Login} from "./Components/Login";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import About from "./Components/About";
import Help from "./Components/Help";
import LoggedUser from "./Components/LoggedUser";
import Contacts from "./Components/Contacts";
import MedicalStoresComponent from "./Components/MedicalStoresComponent";

function App() {
    // const components = MedsData.map(item => {
    //  return <SmallComponent 
    //   number = {item.number}
    //   headerText = {item.header}
    //   bottomText = {item.bottom}
    //   imageAddress = {item.image}
    //   />
    // })
    let [login , setLogin] = React.useState(false) 

    const changeLog= () => console.log("kjdfdfnvjkebr")
  return (
    <router>
    <div className="App">
  
     
     <Routes>
      <Route path="" element ={<Home />} ></Route>
      <Route path="/home" element ={<Home />} ></Route>
      <Route path="/login"  element={<Login />} />
      <Route path="/registration"  element={<Registration />} />
      <Route path="/about" element = { <About /> } />
      <Route  path="/help" element = {<Help />} />
      <Route path="/user" element = {<LoggedUser />} />
      <Route path="/contactus" element ={<Contacts />} />
      <Route path = "/medicalsnearyou"  element = { <MedicalStoresComponent /> } />
     </Routes>
     </div>
      </router>
  );
}

export default App;
