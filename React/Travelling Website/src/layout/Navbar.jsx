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
import Register from "../components/Register";
import "../components/StylishButton.css";
import { BiBorderRadius } from "react-icons/bi";

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
          backgroundColor: "#ffffff",
          /*background: "linear-gradient(to right, #000000ce, #080D0E, #061F26)",*/

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
              </div>
            </div>
          </div>
          <div
            style={{
              fontFamily: "arial",
              fontSize: "17px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              justifyContent: "center",
            }}
          >
            <ul className="flex gap-8 items-center">
              <NavItem title="Home" url="#" />
              <NavItem
                title="Hotels"
                url="/hotels"
                style={{ borderRadius: "20px" }}
                submenu={[
                  { title: "Luxury Hotels", url: "/hotels/luxury-hotels" },
                  { title: "Budget Hotels", url: "/hotels/" },
                  { title: "Hotel Deals", url: "/hotels/hotel-deals" },
                ]}
              />
              <NavItem
                title="Flights"
                url="/flights"
                submenu={[
                  { title: "Domestic Flights", url: "#" },
                  { title: "International Flights", url: "#" },
                  { title: "Flight Deals", url: "#" },
                ]}
              />
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

function NavItem({ Icon, title, url, isActive = false, submenu = [] }) {
  return (
    <li className="relative group">
      <a
        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors duration-300 ${
          isActive
            ? "bg-gray-700 text-white"
            : "text-black hover:bg-gray-600 hover:text-white"
        }`}
        href={url}
      >
        {Icon && <Icon />}
        <span>{title}</span>
        {submenu.length > 0 && <ChevronDown className="ml-2" />}
      </a>
      {submenu.length > 0 && (
        <ul className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg group-hover:block hidden w-48">
          {submenu.map((item, index) => (
            <li key={index} className="border-b last:border-b-0">
              <a className="block px-4 py-2 hover:bg-gray-200" href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
