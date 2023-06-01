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
  const [searchval , setSearchVal] = React.useState()
  const [apiData , setApiData] = React.useState()
  const [searched , setSearched] = React.useState(false)

  const changeSearchText =(e) =>{
    setSearchVal(e.target.value)
  }


  const handleSearch =async(e) =>{
    try{
    e.preventDefault()

    const params = new URLSearchParams({
      name : searchval 
     });
    const response = await fetch(`http://localhost:4000/diseases?${params.toString()}`)
    const jsonData = await response.json();
    setApiData(jsonData);

    setSearched(true);
    
  }
    catch(error){
      console.log(error)
    }
  
  }

console.log(apiData)

    const components = MedsData.map(item => {
     return <SmallComponent 
      number = {item.number}
      headerText = {item.header}
      bottomText = {item.bottom}
      imageAddress = {item.image}
      />
    })

    if(searched===false)
    {
  return (
    <div >
      <Navbar />
      <form onSubmit={handleSearch}>\
        <input className="search-field" type="search"   name='searchval' onChange={changeSearchText}   placeholder="Search About Any Disease or Symptoms"/>
        <button className="search-button" >Search</button>
        </ form>
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

if(searched===true && apiData)
{
 return(
  // <div>
  //   <Navbar />
  //     <div className='disease-details-block'  >
  //     <h1> {apiData.Disease}   </h1>
  //     <h1>Symptoms</h1>
  //     <p> {apiData.Symptoms} </p>
  //     <h1>Causes </h1>
  //     <p> {apiData.Causes} </p>
  //    <h1>Treatment</h1>
  //    <p> {apiData.Treatment} </p>
    
  //     </div>

  // </div>
  <div  >
  <Navbar />
  <div className='disease-details-block' >
      {apiData.map((data) => (
        <div key={data._id}>
          <h1>{data.Disease}</h1>
          <h2>Symptoms:</h2>
          <ul>
            {data.Symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
          <h2>Causes:</h2>
          <ul>
            {data.Causes.map((cause, index) => (
              <li key={index}>{cause}</li>
            ))}
          </ul>
          <h2>Treatment:</h2>
          <ul>
            {data.Treatment.map((treatment, index) => (
              <li key={index}>{treatment}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  
   
 )
}
}

export default Home
