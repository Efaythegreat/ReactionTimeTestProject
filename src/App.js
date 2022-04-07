import "./styles.css";
import React, { Component, useState } from "react";

export default function App() {
  const [style, setStyle] = useState("styleBlockBegin");

  return (
    <div className="App">
      <Menu style={style} setStyle={setStyle} />
    </div>
  );
}

function Menu(props) {
  const [title, setTitle] = useState("Reaction Time Test");
  const [buttonName, setButtonName] = useState("Click to Start");

  return (
    <div className={props.style}>
      <h1>{title}</h1>
      <button
        onClick={() =>
          click(props.style, props.setStyle, setTitle, setButtonName)
        }
      >
        {buttonName}
      </button>
    </div>
  );
}

function click(style, setStyle, setTitle, setButton) {
  console.log("click");
  console.log(style);
  if (style === "styleBlockBegin") {
    console.log(style);
    redScreen(setStyle, setTitle, setButton); // go to red => wait => go to green
    waitT(setStyle, setTitle, setButton, style);
  } else if (style === "styleBlockWait") {
    // too early and go to Wait
    oh_no(setStyle, setTitle, setButton);
  } else if (style === "oh_no") {
    // back to red
    redScreen(setStyle, setTitle, setButton);
    waitT(setStyle, setTitle, setButton, style, true);
  }
}

function waitT(setStyle, setTitle, setButton, style, maxTrue) {
  //Changes to Green
  let waitTime = Math.floor(Math.random() * 4000) + 1000;
  setTimeout(() => {
    if (style === "styleBlockWait") {
      setStyle("styleBlockGreen");
      setTitle("Click!!!");
      setButton("Now");
    }
  }, waitTime);
}

function oh_no(setStyle, setTitle, setButton) {
  //changes to "oh no"
  setStyle("oh_no");
  setTitle("You Clicked too Early!");
  setButton("Try Again");
}

function redScreen(setStyle, setTitle, setButton) {
  //Changes to wait
  setStyle("styleBlockWait");
  setTitle("Wait For It");
  setButton("...");
}

/* 
  1. when click button => 
        change background and change text to "wait"
          (If user click too early, tell them to try again)
  2. after a random amount of time from 2 to 10 =>
        change the background color and tell user to click
        Start timer
          (if user takes too long to click, tell them to try again)
  3. After click =>
        Stop timer
        Tell user their time
*/

/*

*/
