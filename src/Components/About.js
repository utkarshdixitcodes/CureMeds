import React from 'react'
import { Navbar } from './Navbar'

const  About =() => {
  return (
    // <div className='about-class'>
    //   <Navbar />
    //     <h1>About Page</h1>
    //   <p>
    //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    //   </p>
    // </div>
        <div  >
          <Navbar></Navbar>
          <div className='about-comp'>
          <p>Welcome to our medical website. We are dedicated to providing reliable and up-to-date information about various medical conditions, treatments, and healthcare practices.</p>
          <p>Our mission is to empower individuals with knowledge to make informed decisions about their health and well-being.</p>
          <h2>Our Team</h2>
          <p>We have a team of experienced healthcare professionals, including doctors, nurses, and researchers, who work together to ensure the accuracy and quality of the information we provide.</p>
          <h2>Our Services</h2>
          <p>Through our website, you can access a wide range of resources, including:</p>
          <ul>
            <li>Information about common diseases and medical conditions</li>
            <li>Explanation of symptoms, causes, and treatments</li>
            <li>Tips for maintaining a healthy lifestyle</li>
            <li>Guides for managing chronic conditions</li>
            <li>Latest medical news and research updates</li>
          </ul>
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, please feel free to reach out to us. We value your input and strive to improve our services based on user feedback.</p>
          <p>You can contact us through the contact form on our website or by email or phone provided below:</p>
          <ul>
            <li>Email: info@medicalwebsite.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
          </div>
        </div>
      );
    }
    

export default About
