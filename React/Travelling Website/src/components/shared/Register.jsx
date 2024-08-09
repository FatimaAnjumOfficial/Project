import React, { useState } from "react";
import axios from "axios";
import "./StylishButton.css";
import "./HomePage.css";

function Register() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    age: "",
    gender: "",
    address: "",
    country: "",
    city: "",
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
        await axios.post("http://localhost:4000/registration", formData, {
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
      await axios.post("http://localhost:4000/registration", formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        age: "",
        gender: "",
        address: "",
        country: "",
        city: "",
      });
      setShowModal(false);
    } catch (error) {
      setError("Failed to submit registration.");
    }
  };

  return (
    <>
      <div>
        <div style={{ display: "flex", gap: "7px", marginLeft: "175px" }}>
          <button onClick={() => setShowModal(true)} className="stylish-button">
            Register
          </button>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <h2 style={{ textAlign: "center", fontSize: "25px", top: "0" }}>
                Registration Form
              </h2>
              {error && <p className="error">{error}</p>}
              <form onSubmit={handleSubmit}>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
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
                  Phone No:
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <label>
                    Gender:{" "}
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      style={{
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: "4px 6px",
                        textAlign: "center",
                      }}
                    >
                      <option value="" style={{ fontWeight: "bold" }}>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label>
                    <span style={{ color: "white" }}>_________</span>
                    Country:{" "}
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      style={{
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: "4px 6px",
                        textAlign: "center",
                      }}
                    >
                      <option value="" style={{ fontWeight: "bold" }}>
                        Select Country
                      </option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <label>
                    <span style={{ color: "white" }}>_________</span>City:{" "}
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      style={{
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: "4px 6px",
                        textAlign: "center",
                      }}
                    >
                      <option value="" style={{ fontWeight: "bold" }}>
                        Select City
                      </option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>
                <label>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                {imagePreview && (
                  <div className="image-preview-container">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="image-preview"
                    />
                  </div>
                )}
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

export default Register;
