import React, { useState } from "react";
import Register from "./Register";
import logo from "./images/HomePage/Musaafir.png";
import "./Header.css";
import "./Search.css";
import "./StylishButton.css";
import "./Body.css";
import Search from "./Search";

const Header = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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
              <h5>Where Luxurious Meets Stay</h5>
            </div>
          </div>
        </div>
        <div>{/*<Search />*/}</div>
        <div className="button-container">
          <button
            onClick={() => {
              setIsRegisterOpen(true);
              <Register />;
            }}
            className="stylish-button"
          >
            Register
          </button>
        </div>
      </header>
      {isRegisterOpen && <Register onClose={() => setIsRegisterOpen(false)} />}
    </>
  );
};

export default Header;
