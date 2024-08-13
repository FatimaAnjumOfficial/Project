import React from "react";
import camp from "../components/images/camp.png";

function Body() {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        padding: "20px 80px",
        background: "linear-gradient(to right, #f0f8ff, #e0f7fa)",
        textAlign: "center",
      }}
    >
      <div className="image-container" style={{ marginBottom: "40px" }}>
        <img
          src="https://media.hanoitimes.vn/2023/07/18/Masteri_West_Height_project.png"
          alt="Beach Resort"
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "auto",
            borderRadius: "25px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      <h1
        style={{
          fontSize: "40px",
          fontFamily: "cursive",
          marginBottom: "10px",
          color: "#2c3e50",
          marginTop: "120px",
        }}
      >
        <b>Let's Go on an Adventure</b>
      </h1>
      <h2 style={{ fontSize: "22px", color: "#7f8c8d", marginBottom: "30px" }}>
        Find and book a great experience
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "90px",
          flexWrap: "wrap", // Wrap images if they overflow
          marginTop: "120px",
          marginBottom: "130px",
        }}
      >
        <div style={{ display: "flex", gap: "15px" }}>
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src="https://img.freepik.com/premium-vector/landscape-beach-rest-zone-with-sun-lounger-sun-parasol-theme-summer_955564-56.jpg"
              alt="Beech Resort"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div
            style={{
              marginTop: "55px",
              justifyContent: "flex-start",
            }}
          >
            <p>Luxury Resort at</p>
            <p style={{ margin: 0 }}>the Sea</p>
            <p style={{ backgroundColor: "#CED5DC", borderRadius: "10px" }}>
              10,684 Places
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://img.freepik.com/premium-vector/summer-camping-forest-tent-gear-hand-drawn-flat-stylish-cartoon-sticker-icon-concept-isolated_730620-323236.jpg"
              alt="Camp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div
            style={{
              marginTop: "55px",
              justifyContent: "flex-start",
            }}
          >
            <p>Camping amidst the</p>
            <p style={{ margin: 0 }}>Wild</p>
            <p style={{ backgroundColor: "#CED5DC", borderRadius: "10px" }}>
              1,924 Places
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1357894841/vector/bonfire-with-marshmallow-cartoon-camp-background-sweets-roasting-on-fire-night-and-forest.jpg?s=612x612&w=0&k=20&c=FbVy1gxLfkIiz7vrK5yvokp9Ab6JHepKmKLAi4qAr_8="
              alt="Camp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div
            style={{
              marginTop: "55px",
              justifyContent: "flex-start",
            }}
          >
            <p>Bonfire at Snowy</p>
            <p style={{ margin: 0 }}>Mountains</p>
            <p style={{ backgroundColor: "#CED5DC", borderRadius: "10px" }}>
              9,326 Places
            </p>
          </div>
        </div>
      </div>

      <h1
        style={{
          fontSize: "40px",
          fontFamily: "cursive",
          marginBottom: "10px",
          color: "#2c3e50",
          marginTop: "160px",
        }}
      >
        <b>Live Anywhere</b>
      </h1>
      <h2 style={{ fontSize: "22px", color: "#7f8c8d", marginBottom: "30px" }}>
        Keep calm & travel on
      </h2>
    </div>
  );
}

export default Body;
