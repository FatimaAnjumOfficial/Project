import avatar from "../assets/avatar.png";
import logo from "../components/images/Musaafir.png";
import {
  Bag,
  BarChart,
  ChevronDown,
  Cursor,
  Menu,
  Plus,
  DownArrow,
} from "../assets/Icons";
import { Button } from "../components/shared/Button";
import { LayoutContainer } from "./LayoutContainer";
import "./Logo.css";
import Register from "../components//Register";
import "../components/StylishButton.css";

export function Navbar() {
  return (
    <LayoutContainer>
      <div className="p-4 md:hidden">
        <Menu />
      </div>
      <div
        className="justify-between hidden md:flex"
        style={{
          display: "flex",
          background: "linear-gradient(to right, #000000, #000000ff,  #49032e)",
          border: "1px solid black",
          padding: "0px 40px",
        }}
      >
        <div className="flex gap-8 items-center">
          <div className="logo">
            <div
              style={{
                flexDirection: "column",
                fontFamily: "cursive",
              }}
            >
              <div className="logo-container">
                <img src={logo} alt="Logo" />
                {/*} <h5>Where Luxurious Meets Stay</h5>*/}
              </div>
            </div>
          </div>
          <div
            style={{
              fontFamily: "Times New Roman, serif",
              fontSize: "18px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              justifyContent: "center",
            }}
          >
            <ul className="flex gap-8 items-center">
              <NavItem title="Home" url="#" />
              <NavItem title="Hotels" url="/hotels" />
              <NavItem title="Flights" url="flights" />
              <NavItem title="Packages" url="/packages" />
              <NavItem title="About Us" url="/about-us" />
              <NavItem title="Contact Us" url="/contact-us" />
            </ul>
          </div>
        </div>
        <div className="flex gap-4 py-11">
          <Register />

          {/* <Button
            className="flex items-center gap-1 rounded-xl px-3 bg-zinc-700"
            variant="ghost"
          >
            <span>Network</span>
            <Plus />
          </Button>
          <div className="flex gap-1 items-center">
              <img className="h-6 w-6" src={avatar} />
            <Button variant="ghost" size="icon">
              <ChevronDown />
            </Button>
          </div>*/}
        </div>
      </div>
    </LayoutContainer>
  );
}

function NavItem({ Icon, title, url, isActive = false }) {
  return (
    <a
      className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors duration-300 ${
        isActive
          ? "bg-gray-700 text-white"
          : "text-gray-300 hover:bg-gray-600 hover:text-white"
      }`}
      href={url}
    >
      {Icon && <Icon />}
      <span>{title}</span>
    </a>
  );
}
