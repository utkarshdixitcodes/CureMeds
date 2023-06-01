import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

const Registration =() => {
    var [account , setAccount] = React.useState(true)
    const userChange = ()=>{
        setAccount(!account)
    }

    const [newUserData , setNewUserData] = React.useState({})
    const inputChanged =(event) =>{
       setNewUserData({...newUserData , [event.target.name]  : event.target.value})
    }

const handleRegistration = async (event)  =>{
    event.preventDefault()
  var response = await fetch("http://localhost:4000/users/registration",{
        method : 'POST',
        body : JSON.stringify(newUserData) ,
        headers : {
            "Content-Type" : "application/json"
          }
    })
 }

  return (
    <div  >
        <Navbar />  
      {account && <div  className="form-box-register">
            <form onSubmit={handleRegistration}>
                <div className="input-box">
                    <span className="icon"><ion-icon name="person"></ion-icon></span>
                    <input type="text" required name='username'  onChange={inputChanged} />
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <span className="icon"> <ion-icon name="mail"></ion-icon></span>
                    <input type="email" required  name='usermail' onChange={inputChanged}/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required name='userpassword'  onChange={inputChanged} />
                    <label>password</label>
                </div>
                <div className="remeber-forget">
                    <label><input type="checkbox" /> agree to the terms & conditions</label>

                </div>
                <button type="submit" className="btn">Register</button>
                <div className="login-register">
                    <p> Already have an account?<Link to = "/login" className="login-link" onClick={userChange} > Login</Link></p>
                </div>
            </form>
    </div>}
    </div>
  )
}
export default  Registration
