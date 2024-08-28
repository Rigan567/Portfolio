import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import Switch from "./Switch";
import { RxCross1 } from "react-icons/rx";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <Switch />
        <NavContent setMenuOpen={setMenuOpen} />
        <button
          className={`navMenuOpen ${menuOpen ? "open" : "closed"}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
            // console.log(menuOpen);
          }}
        >
          {menuOpen ? <RxCross1 /> : <RiMenu3Line />}
        </button>
      </nav>
    </>
  );
};

export const NavContent = ({ setMenuOpen }) => {
  return (
    <>
      <div className="nav_div">
        <a onClick={() => setMenuOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)} href="#works">
          Portfolio
        </a>
        <a onClick={() => setMenuOpen(false)} href="#services">
          Services
        </a>

        <a onClick={() => setMenuOpen(false)} href="#testimonial">
          Skills
        </a>
        <a onClick={() => setMenuOpen(false)} href="#timeline">
          Academia
        </a>
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
      </div>
      <a href="mailto:rigan.paul@g.bracu.ac.bd">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
