import React from 'react'
import { Navbar } from './Navbar'
import { Search } from './Search'
import { ThemeImage } from './ThemeImage'
import {SmallComponent} from './SmallComponent'
import MedsData from "../smallComponentData"
import KnowYourMedicine from './KnowYourMedicine'
import DepressionBlock from './DepressionBlock'
import Footer from './Footer'
const Home =() => {
    const components = MedsData.map(item => {
     return <SmallComponent 
      number = {item.number}
      headerText = {item.header}
      bottomText = {item.bottom}
      imageAddress = {item.image}
      />
    })


  return (
    <div >
      <Navbar />
      <Search />
      <ThemeImage />
      <div className='small-components'>
      {components}
      </div>
      <KnowYourMedicine />
      <DepressionBlock />
      <Footer />
    
    </div>
  )
}

export default Home
