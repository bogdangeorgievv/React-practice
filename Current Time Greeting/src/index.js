//Create a React app.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.


import React from "react";
import ReactDOM from "react-dom";

let currentDate = new Date();
let hours = currentDate.getHours();
let message = "";
let color = "";

let root = document.getElementById("root");

if (hours >= 12 && hours < 18) {
  message = "Good Afternoon";
  color = "green";
} else if (hours >= 18 && hours < 24) {
  message = "Good Evening";
  color = "blue";
} else if (hours >= 0 && hours < 12) {
  message = "Good Morning";
  color = "red";
}

let style = {
  color: color,
};

ReactDOM.render(
  <h1 className="heading" style={style}>
    {message}
  </h1>,
  root
);
