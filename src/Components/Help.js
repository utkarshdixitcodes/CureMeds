import React from 'react'
import { Navbar } from './Navbar'

const Help =() => {
  return (
    <div c >
      <Navbar />
      <div  className='help-comp'  >
      <p>Welcome to our Help Center. We are here to assist you with any questions or issues you may have regarding our medical online project.</p>
      <h2>Frequently Asked Questions</h2>
      <h2>1. How do I create an account?</h2>
      <p>To create an account, click on the "Sign Up" button on the top right corner of the page. Fill in the required information and click "Submit". You will receive a confirmation email to activate your account.</p>
      <h2>2. How can I search for specific medical information?</h2>
      <p>Our website provides a search bar at the top of each page. Simply enter the keywords related to the medical information you are looking for and click the "Search" button.</p>
      <h2>3. Can I book appointments with doctors through this website?</h2>
      <p>Currently, our website does not support appointment booking. We provide information and resources to help you make informed decisions about your health, but for booking appointments, we recommend contacting healthcare providers directly.</p>
      <h2>4. How do I contact customer support?</h2>
      <p>If you have any questions or need assistance, you can reach our customer support team by filling out the contact form on our website or by sending an email to support@medicalproject.com. We strive to respond to all inquiries within 24 hours.</p>
      <h2>Contact Us</h2>
      <p>If you need further assistance or have any other inquiries, please don't hesitate to contact us. We are here to help!</p>
      <ul>
        <li>Email: support@curemeds.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Medical Street,kanpur,India</li>
      </ul>
    </div>
    </div>
  )
}

export default Help
