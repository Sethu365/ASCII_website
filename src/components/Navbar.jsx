import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">🐾FurSure</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/vet-booking">Vet Booking</Link>
          <Link to="/medical-records">Medical Records</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </nav>
  );
}
