import React from 'react'
import { Navbar } from './Navbar'

const Contacts = () => {
  return (
    <div className="container">
        <Navbar />
        <form>
            <h1>Contact Us Form</h1>
            <input type="text" id="first name" placeholder="First Name" required />
            <input type="text" id="last name" placeholder="Last Name" required />
            <input type="text" id="mobile" placeholder="Mobile" required />
            <h4> Type Your Message Here...</h4>
            <textarea> required</textarea>
            <input type="email" id="email" placeholder="Email" required />
            <input type="submit" value="Send" id="button" required />
        </form>
    </div>
  )
}

export default Contacts
