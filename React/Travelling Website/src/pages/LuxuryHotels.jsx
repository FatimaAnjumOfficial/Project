import React from "react";
import "./LuxuryHotels.css";

const LuxuryHotels = () => {
  return (
    <div className="luxury-hotels-container">
      <header className="page-header">
        <h1>Luxury Hotels</h1>
        <p>Explore the finest luxury hotels around the world.</p>
      </header>
      <main className="content">
        <section className="hotel-list">
          {/* Add your hotel cards or list here */}
          <div className="hotel-card">
            <img src="hotel-image-url" alt="Hotel Name" />
            <h2>Hotel Name</h2>
            <p>Hotel description goes here.</p>
          </div>
          {/* Repeat hotel cards as needed */}
        </section>
      </main>
    </div>
  );
};

export default LuxuryHotels;
