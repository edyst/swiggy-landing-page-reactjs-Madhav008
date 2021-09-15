import React from "react";
import { Header } from "../Header/Header";
import "./FirstSection.css";
const FirstSection = () => {
  return (
    <div className="FirstSection">
      <div className="LeftSide">
        <div className="div-padding"></div>
        <Header />
        <h1>Movie marathon?</h1>
        <h2>Order food from favourite restaurants near you.</h2>

         <div class="flex-row">
          <div class="search">
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="search-input"
            />
            <button className="locate-me">Locate Me</button>
          </div>
          <button className="search-btn">FIND FOOD</button>
        </div> 

        <h3>Popular cities in India</h3>
        <div class="li">
          <p class="city">Ahemdabad</p>
          <p class="city">Kolkata</p>
          <p class="city">Delhi</p>
          <p class="city">Mumbai</p>
          <p class="city">Bengaluru</p>
          <p class="city">Hyderabad</p>
        </div>
      </div>

      <div className="RightSide"></div>
    </div>
  );
};

export default FirstSection;
