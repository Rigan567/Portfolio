import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { useTheme } from "../Theme-context";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>
      <button className="navMenuOpen" onClick={() => setMenuOpen(!menuOpen)}>
        <RiMenu3Line />
      </button>
    </>
  );
};

export const NavContent = ({ setMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div>
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
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default Header;
