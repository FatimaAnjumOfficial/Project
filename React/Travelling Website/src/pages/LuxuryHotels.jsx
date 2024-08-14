import React, { useState } from "react";
import HotelCard from "../components/marketPlace/HotelCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { hotels } from "../data/hotels";
import "leaflet/dist/leaflet.css";
import "./LuxuryHotels.css";

const LuxuryHotels = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleCardClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleClosePreview = () => {
    setSelectedHotel(null);
  };

  return (
    <div className="luxury-hotels-container">
      <header className="page-header">
        <h1>Luxury Hotels</h1>
        <p>Explore the finest luxury hotels around the world.</p>
      </header>
      <main className="content">
        <section className="hotel-list">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              image={hotel.image}
              name={hotel.name}
              rooms={hotel.rooms}
              rent={hotel.rent}
              country={hotel.country}
              city={hotel.city}
              onClick={() => handleCardClick(hotel)}
            />
          ))}
        </section>

        {selectedHotel && (
          <section className="preview">
            <button
              className="close-button"
              onClick={handleClosePreview}
              style={{ top: 1, padding: "0px 8px" }}
            >
              &times;
            </button>
            <h2 style={{ fontSize: "1.5rem" }}>
              <b>{selectedHotel.name}</b>
            </h2>
            <br />
            <div style={{ display: "flex", gap: "20px" }}>
              <img src={selectedHotel.image} alt={selectedHotel.name} />

              <div style={{ textAlign: "left", marginTop: "45px" }}>
                <p>
                  <b>Rooms:</b> {selectedHotel.rooms}
                </p>
                <p>
                  <b>Rent:</b> {selectedHotel.rent}
                </p>
                <p>
                  <b>Country:</b> {selectedHotel.country}
                </p>
                <p>
                  <b>City:</b> {selectedHotel.city}
                </p>
              </div>
            </div>
            <p style={{ textAlign: "left" }}>{selectedHotel.description}</p>
            <br />
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <div>
                <img
                  src={selectedHotel.interior}
                  alt="Interior"
                  style={{
                    width: "250px",
                    height: "140px",
                    border: "black solid 1px",
                  }}
                />
                <p style={{ fontSize: "14px", top: 0 }}>Interior</p>
              </div>
              <div>
                <img
                  src={selectedHotel.bedroom}
                  alt="Bedroom"
                  style={{
                    width: "250px",
                    height: "140px",
                    border: "black solid 1px",
                  }}
                />
                <p style={{ fontSize: "14px", top: 0 }}>Bedroom</p>
              </div>
            </div>
          </section>
        )}
        <section className="map-container">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {hotels.map((hotel) => (
              <Marker key={hotel.id} position={hotel.position}>
                <Popup>
                  {hotel.name}
                  <br />
                  {hotel.location}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </main>
    </div>
  );
};

export default LuxuryHotels;
