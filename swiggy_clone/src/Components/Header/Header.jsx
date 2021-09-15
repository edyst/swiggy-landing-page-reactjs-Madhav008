import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"
            alt=""
          />
        </div>
        <div className="Buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};
