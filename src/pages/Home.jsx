import "../styles/Home.css";
import dog1 from "../assets/dog1.jpg";
import dog2 from "../assets/dog2.jpg";
import dog3 from "../assets/dog3.jpg";
import dog4 from "../assets/dog4.jpg";
import dog5 from "../assets/dog5.jpg";



export default function Home() {
    return (
      <div className="home-container">
      <div className="home-container2">
        
        
        <header className="hero">
          <h1>The Best Care for Your Best Friend</h1>
          <p>Find a trusted vet and premium pet services near you.</p>
          <div className="search-bar">
            <input type="text" placeholder="Find a vet near you" />
            <button>Search</button>
          </div>
        </header>
        </div>
        <section className="image-gallery">
          <img src={dog1} alt="Vet care" />
          <img src={dog2} alt="Pets" />
          <img src={dog3} alt="Grooming" />
          <img src={dog4} alt="Pet store" />
          <img src={dog5} alt="Cats" />
        </section>
      </div>
    );
  }
  