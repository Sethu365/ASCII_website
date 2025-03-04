import "../styles/Contact.css";
import { FaPhone, FaClinicMedical, FaQuestionCircle, FaEnvelope, FaInfoCircle } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Emergency Help</h1>
      <p>We're here for you and your pet <span className="highlight">24/7</span></p>

      <section className="contact-section">
        <h3>Call us now</h3>
        <div className="contact-box">
          <FaPhone className="icon" />
          <div>
            <p className="contact-title">1-800-555-1234</p>
            <p>Emergency veterinary care available 24/7</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h3>Find a clinic</h3>
        <div className="contact-box">
          <FaClinicMedical className="icon" />
          <div>
            <p className="contact-title">Find a clinic near you</p>
            <p>Get directions and contact info</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h3>Ask a vet online</h3>
        <div className="contact-box">
          <FaQuestionCircle className="icon" />
          <div>
            <p className="contact-title">Ask us anything</p>
            <p>Get expert answers in minutes</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h3>Support</h3>
        <div className="contact-box">
          <FaEnvelope className="icon" />
          <div>
            <p className="contact-title">Contact us</p>
            <p>Get help with your account or an order</p>
          </div>
        </div>
        
      </section>
    </div>
  );
}
