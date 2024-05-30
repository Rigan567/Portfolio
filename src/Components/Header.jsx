import React from "react";

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
      <img
        src="https://e0.pxfuel.com/wallpapers/581/334/desktop-wallpaper-cool-for-boys-cool-pics-thumbnail.jpg"
        alt="Founder"
      />
      {/* Rigan
        <Typewriter
          options={{
            strings: [".."],
            autoStart: true,
            loop: true,
            delay: 600,
            deleteSpeed: 60,
            cursor: "",
            wrapperClassName: "typewriterpara",
          }} */}

      <div>
        <a href="#home">Home</a>
        <a href="#works">Portfolio</a>
        <a href="#services">Services</a>

        <a href="#testimonial">Skills</a>
        <a href="#timeline">Academia</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:rigan.paul@g.bracu.ac.bd">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
