import "../styles/Contact.css"
import Navbar from '../components/Navbar'

export default function Contact() {
    return (
      <>
        <Navbar />
        <div id="main-contact-container">
          <div id="page-header">
            <p>Project</p>
            <p>Inquiries</p>
          </div>
          <hr></hr>
          <div id="contact-container">
            <p id="contact-text">
              We would love to learn about your brand's goals and objectives to ensure
              we are a good fit. Email us today at fakeEmail@fake.com
            </p>
          </div>
        </div>
      </>
    )
  }
