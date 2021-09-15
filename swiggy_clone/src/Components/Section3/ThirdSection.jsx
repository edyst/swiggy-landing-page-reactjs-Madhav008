import React from "react";
import "./ThirdSection.css";
const ThirdSection = () => {
  return (
    <div>
      <div className="ThirdSection">
        <div className="container">
          <div className="head">Restaurants in your pocket</div>
          <div className="sub-head">
            Order from your favorite restaurants & track on the go, with the
            all-new Swiggy app.
          </div>
          <div className="download-img">
            <img
              height="54"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
            ></img>
            <img
              height="54"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
            ></img>
          </div>
        </div>
        <div className="images">
          <img
            width="384"
            height="489"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
            alt=""
          />
          <img
            
            width="384"
            height="489"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
