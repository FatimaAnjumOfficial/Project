// src/pages/LuxuryHotels.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import HotelCard from "../components/marketPlace/HotelCard";
import "leaflet/dist/leaflet.css";
import "./LuxuryHotels.css";
import { hotels } from "../data/hotels";

const LuxuryHotels = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleCardClick = (hotel) => {
    setSelectedHotel(hotel);
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
            <h2>{selectedHotel.name}</h2>
            <img src={selectedHotel.image} alt={selectedHotel.name} />
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
