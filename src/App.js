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
    console.log("inside");
    setStyle("StyleBlockWait");
    setTitle("Wait For It");
    setButton("...");
  }
}

/*
function randomN(){
  Math.floor(Math.random() * 10) + 2;}
*/

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
const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}
*/
