import React from "react";
import { NavContent } from "./Header";
import { RxCross1 } from "react-icons/rx";

const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <button className="cross_btn" onClick={() => setMenuOpen(false)}>
        <RxCross1 />
      </button>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default HeaderPhone;
