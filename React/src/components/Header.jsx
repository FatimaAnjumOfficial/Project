import React from "react";
import logo from "./Musaafir.png";
import "./StylishButton.css";
import "./Header.css";
import "./Body.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <div
            style={{
              flexDirection: "column",
              fontFamily: "cursive",
            }}
          >
            <div className="logo-container">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h5>Where Luxurious Meets Stay</h5>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button
            onClick={() => {
              {
                <Register />;
              }
            }}
            className="stylish-button"
          >
            Register
          </button>
          <button
            onClick={() => {
              {
                <Form />;
              }
            }}
            className="stylish-button"
          >
            Sign Up
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
