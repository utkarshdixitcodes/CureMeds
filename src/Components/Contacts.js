import React from 'react'
import { Navbar } from './Navbar'

const Contacts = () => {
  return (
    <div>
    <Navbar />
    <section className="contact">
    <div className="content">
        <h2>Contact Us</h2>
        <p>If you require any further information, feel free to contact us.</p>
    </div>
    <div className="container">
        <div className="contactInfo">
            <div className="box">
                <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Adress</h3>
                    <p>Yashoda nagar, <br />Kanpur</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-phone-square" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>8418891571<br />9653054588 <br />6392735322</p>
                </div>
            </div>

            <div className="box">
                <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>curemeds@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="ContactForm">
            <form>
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input type="text" name="" required="required" />
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="" required="required" />
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea required="required"></textarea>
                    <span>Type your Message...</span>
                </div>
                <div className="inputBox">
                    <input type="Submit" name="" value="send" />
                </div>
            </form>
        </div>
    </div>
</section>
</div>
  )
}

export default Contacts
