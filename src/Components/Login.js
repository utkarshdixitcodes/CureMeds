import React from 'react'
import { Navbar } from './Navbar'                           
import Registration from './Registration'
import { Link } from 'react-router-dom'

export  const Login=()=> {
    var [user , setUser] = React.useState(true)
    
    const userChange =() =>{
        setUser(!user)
    }
    
    const [userData , setUserData] = React.useState({})
        const inputChanged =(event) =>{
           setUserData({...userData , [event.target.name]  : event.target.value})
        }

    const handleLogin = async (event)  =>{
        event.preventDefault()
      var response = await fetch("http://localhost:4000/users/login",{
            method : 'POST',
            body : JSON.stringify(userData) ,
            headers : {
                "Content-Type" : "application/json"
              }
        })
     }
   
  return (
    <div>
        <Navbar />
    <div className='login-body'>
          {user &&   <div className="form-box login">
                <h2>Login to your Account</h2>
            <form onSubmit={handleLogin}>
                <div className="input-box">
                    <span className="icon"> <ion-icon name="mail"></ion-icon></span>
                    <input type="email" required  name='usermail' onChange={inputChanged}/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required  name='userpassword' onChange={inputChanged}/>
                    <label>password</label>
                </div>
                <div className="remeber-forget">
                    <label><input type="checkbox" /> Remeber me</label>
                    <a href="#"> forget password?</a>
                </div>
                <button type="submit" className="btn">login</button>
                <div className="login-register">
                    <p> Don't have an account?<Link to="/Registration" onClick={userChange} className="register-link"> Register</Link></p>
                </div>
            </form>
        </div>}

       {!user && <Link to ="/Registration"><Registration /></Link> }
    </div>
     </div>
  )
}

