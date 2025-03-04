import "../styles/MedicalRecords.css";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import gr from "../assets/gr.jpg";

export default function MedicalRecords() {
  return (
    <div className="medical-records-container">
      <header className="hero-section">
        <img src={gr} alt="Pet" className="pet-image" />
        <div className="pet-info">
          <h2>Rex</h2>
          <p>6 years old | Golden Retriever</p>
        </div>
      </header>

      <nav className="tab-menu">
        <span className="active">Medical History</span>
        <span>Vaccinations</span>
        <span>Reminders</span>
      </nav>

      <section className="records-section">
        <h3>Medical History</h3>
        <div className="record-item">
          <FaCheckCircle className="icon" />
          <div>
            <h4>Neuter</h4>
            <p>August 12, 2021</p>
          </div>
        </div>
        <div className="record-item">
          <FaCheckCircle className="icon" />
          <div>
            <h4>Neuter</h4>
            <p>May 7, 2019</p>
          </div>
        </div>
      </section>

      <section className="records-section">
        <h3>Vaccinations</h3>
        {["Rabies", "Bordetella", "Distemper/Parvo", "Lepto"].map((vaccine, index) => (
          <div className="record-item" key={index}>
            <FaCheckCircle className="icon" />
            <div>
              <h4>{vaccine}</h4>
              <p>November 7, 2020</p>
            </div>
          </div>
        ))}
      </section>

      <section className="records-section">
        <h3>Reminders</h3>
        <div className="record-item">
          <FaCheckCircle className="icon" />
          <div>
            <h4>Next Vaccination</h4>
            <p>November 7, 2023</p>
          </div>
        </div>
        <div className="record-item">
          <FaCheckCircle className="icon" />
          <div>
            <h4>Next Heartworm Test</h4>
            <p>March 12, 2023</p>
          </div>
        </div>
        <button className="add-reminder">
          <FaPlus className="plus-icon" /> Add a reminder
        </button>
      </section>
    </div>
  );
}
