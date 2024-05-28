import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => {
  return (
    <>
      <h2 style={{ display: "flex" }}>
        Rigan
        <Typewriter
          options={{
            strings: [".."],
            autoStart: true,
            loop: true,
            delay: 600,
            deleteSpeed: 60,
            cursor: "",
            wrapperClassName: "typewriterpara",
          }}
        />
      </h2>
      <div>
        <a href="#home">Home</a>
        <a href="#works">Portfolio</a>
        <a href="#services">Services</a>

        <a href="#timeline">Experience</a>
        <a href="#testimonial">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:rigan.paul@g.bracu.ac.bd">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
