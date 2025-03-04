import React from "react";  
import "../styles/VetBooking.css";
import pr from "../assets/profile.jpg";

export default function VetBooking() {  
  return (
    <div className="vet-booking-container">
      <h1>Vet Booking Page</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: "50%" }}></div>
      </div>
      <h2>Book a vet appointment</h2>
      <input type="text" placeholder="Type a question or topic" className="search-input" />
      <h3>Choose a vet</h3>
      <div className="vet-list">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="vet-item">
            <img src={pr} alt="Vet" className="vet-avatar" />
            <div className="vet-info">
              <h4>Dr. Janelle Jones</h4>
              <p>Veterinarian</p>
            </div>
            <button className="select-vet">&gt;</button>
          </div>
        ))}
      </div>
      <button className="next-button">Next: Choose a time</button>
    </div>
  );
}
