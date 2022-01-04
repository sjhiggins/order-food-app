import React from "react";
import "../css/Background.css";
const Background = () => {
  return (
    <div>
      <div className="background-bar"></div>
      <div className="background-img">
        <img
          className="background-img"
          src="images/food-table-background.jpg"
          alt="People eating food on a table."
        />
      </div>
    </div>
  );
};

export default Background;
