import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from "./Search"
import { ThemeImage } from './ThemeImage'
import KnowYourMedicine from './KnowYourMedicine'
import DepressionBlock from './DepressionBlock'
import MedsData from '../smallComponentData'
import { SmallComponent } from './SmallComponent'


 const LoggedUser =() => {
    const components = MedsData.map(item => {
        return <SmallComponent 
         number = {item.number}
         headerText = {item.header}
         bottomText = {item.bottom}
         imageAddress = {item.image}
         />
       })
  return (
    <div>
       <navbar className = "Navbar">
        <div>
       <Link to="/home"> <img className="logo-image" src = "./white-logo.jpeg" alt="image not found"></img></Link> 
        </div>
        <div className="sideBar">
        <Link className="sideBar-info" to="/about"  >About</Link>
        <Link className="sideBar-info"  to="/help"  >Help</Link>
        <p className="sideBar-info">Contact Us</p>
        <img className="sideBar-info"  src="./userlogo.png" />

        <div>
          <img src="./hamburger.png"  className="hamburger"/>
        </div>
        </div> 
        </navbar>
        <Search />
      <ThemeImage />
      <div className='small-components'>
      {components}
      </div>
      <KnowYourMedicine />
      <DepressionBlock />
    </div>
  )
}

export default LoggedUser
