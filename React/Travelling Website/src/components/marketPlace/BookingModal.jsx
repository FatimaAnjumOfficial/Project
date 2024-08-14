import React, { useState } from "react";
import "./BookingModal.css";

const BookingModal = ({ flight, onClose }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    cnic: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking details:", bookingDetails);
    alert(`Booking confirmed for flight ${flight.flightNumber}.`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 style={{ textAlign: "center", fontSize: "25px", top: "0" }}>
          <b>Book Flight</b>
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "45px" }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={bookingDetails.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              CNIC:
              <input
                type="text"
                name="cnic"
                value={bookingDetails.cnic}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: "45px" }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={bookingDetails.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={bookingDetails.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: "45px" }}>
            <label>
              Flight Name:
              <input type="text" value={flight.flightName} readOnly />
            </label>
            <label>
              Flight No.:
              <input type="text" value={flight.flightNumber} readOnly />
            </label>
          </div>
          <div style={{ display: "flex", gap: "45px" }}>
            <label>
              Departure:
              <input type="text" value={flight.departure} readOnly />
            </label>

            <label>
              Arrival:
              <input type="text" value={flight.arrival} readOnly />
            </label>
          </div>
          <button type="submit">Confirm Booking</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
