import React from 'react'
import { Link } from 'react-router-dom'

const KnowYourMedicine =() => {
  
  
  return (
    <div className="know-your-medicine-block">
     <img  className='know-your-medicine-block-image'   src = "./know-your-medicine.jpg" />
     <p className="know-your-medicine-block-text"> Get an Overview and deep analysis of medicine you are consuming
      </p>
     <Link to = "/meddetails">
     <button className='know-your-medicine-link'> Tap to Know More</button></Link> 

     </div>
    
  )
}

export default KnowYourMedicine
