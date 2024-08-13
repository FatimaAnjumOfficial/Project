import React, { useState } from "react";
import axios from "axios";
import "./StylishButton.css";
import "./HomePage.css";

function SignUp() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    c_password: "",
  });
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        await axios.post("http://localhost:4000/signup", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Image File uploaded successfully");

        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result); // Set the preview URL
        };
        reader.readAsDataURL(file);
      } catch (error) {
        setError("Error uploading image file.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/signup", formData);

      setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
        c_password: "",
      });
      setShowModal(false);
    } catch (error) {
      setError("Failed to sign-up.");
    }
  };

  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <button onClick={() => setShowModal(true)} className="stylish-button">
            Sign Up
          </button>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <h2 style={{ textAlign: "center", fontSize: "25px", top: "0" }}>
                <b>Sign Up</b>
              </h2>
              {error && <p className="error">{error}</p>}
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Confirm Password:
                  <input
                    type="text"
                    name="c_password"
                    value={formData.c_password}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SignUp;
