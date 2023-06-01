import React from 'react'
import { Navbar } from './Navbar'

const  DetailsMedicine =()  =>{
  const [apiData , setApiData] = React.useState()
  const [notSearched , setNotSearched] = React.useState(false)
  const [medsname , setMedsName] = React.useState("")

  const changeName =(e) =>{

    setMedsName(e.target.value)
  }
  console.log(medsname)

  const getMedicineData = async(e) =>{
    e.preventDefault()
    try{
       const params = new URLSearchParams({
        name : medsname 
       });
     


      const response = await fetch(`http://localhost:4000/medicines?${params.toString()}`)
      .then(response => response.json())
      .then(data => {
        setApiData(data)
        console.log(data);
      })
    setNotSearched(true)
    console.log("you clicked on Get Meds Block")
    }
    catch (error){
      console.log('Error fetching medicine data:', error); 
    }
  }

  console.log(apiData)

  if(notSearched===false)
  {
  return (
  
    <div>
        <Navbar />
      <div class="search-box">
        <h2> Search-Medicine</h2>
        <form onSubmit={getMedicineData}>
            <input type="text" name="full name" placeholder="Full Name.." />
            <input type="text" name="Medicine" placeholder="Medicine Name.." onChange={changeName} />
            <textarea name="comment" placeholder="Type Your Comment.."></textarea>
            <button type="submit">Submit Medicine</button>
        </form>
    </div>
    </div>
  )
}
  if(notSearched===true){
    return(
      <div>
        <Navbar />
      <div className='medicine-details-box'>
        <h1  className = "medicine-details-h1">Medicine Name : {apiData.Name}</h1>
        <h2 className = "medicine-details-h1">Key Ingredients</h2>
        <p>{apiData.Key_Ingredients}</p>
        <h2 className = "medicine-details-h1">Key Benefits</h2>
        <p> {apiData.Key_Benefits} </p>
        <h2 className = "medicine-details-h1"> Directions For Use</h2>
        <p> {apiData.Directions_For_Use} </p>
        <h2 className = "medicine-details-h1">Safety Information </h2>
        <p> {apiData.Safety_Information} </p>

      </div>
      </div>
    )
  }
}

export default DetailsMedicine
