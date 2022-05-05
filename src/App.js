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

  const [timerOn, setTimerOn] = useState(false);
  const [timerTime, setTimerTime] = useState(0);

  function startTimer() {
    setTimerOn(true);
    setTimerTime(timerTime);
    let startTime = Date.now();

    timerChangeToBlue = setInterval(function () {
      setTimerTime(Date.now() - startTime);
      console.log(timerTime);
    }, 10);
  }

  /* Example
    var interval = setInterval(....)
    clearInterval(interval)
  */

  function stopTimer() {
    setTimerOn(false);
    clearInterval(timerChangeToBlue);
  }

  return (
    <div className={props.style}>
      <h1>{title}</h1>
      <button
        onClick={() =>
          click(
            props.style,
            props.setStyle,
            setTitle,
            setButtonName,
            startTimer,
            stopTimer,
            setTimerTime,
            timerTime
          )
        }
      >
        {buttonName}
      </button>
      <p>{timerTime}</p>
    </div>
  );
}

function click(style, setStyle, setTitle, setButton, startTimer, stopTimer, setTimerTime, timerTime) {
  console.log("click");
  console.log(style);

  if (style === "styleBlockBegin") {
    console.log(style + " on if-statement of click");
    redScreen(setStyle, setTitle, setButton); // go to red => wait => go to green
    waitT(setStyle, setTitle, setButton, style, startTimer);
  } else if (style === "styleBlockWait") {
    // too early and go to Wait
    oh_no(setStyle, setTitle, setButton);
  } else if (style === "oh_no") {
    // back to red
    // clearTimeout(timer);
    redScreen(setStyle, setTitle, setButton);
    waitT(setStyle, setTitle, setButton, style, startTimer);
  } else if (style === "styleBlockGreen") {
    //goes to blue
    stopTimer()
    blueScreen(setStyle, setTitle, setButton, timerTime);
  } else if (style === "styleBlockBlue") {
    setTimerTime(0);
    setStyle("styleBlockBegin");
    setTitle("Reaction Time Test");
    setButton("Click to Start");
  }
}
let timer;
let timerChangeToBlue

function waitT(setStyle, setTitle, setButton, style, startTimer) {
  //Changes to Green

  let waitTime = Math.floor(Math.random() * 4000) + 1000;

  timer = setTimeout(() => {
    //if (style === "styleBlockWait" || maxTrue) {
    setStyle("styleBlockGreen");
    setTitle("Click!!!");
    setButton("Now");
    startTimer();

    console.log("waiting");
    //}
  }, waitTime);
  console.log(style + " End of waitT");
}

function oh_no(setStyle, setTitle, setButton) {
  //changes to "oh no"
  clearTimeout(timer);
  setStyle("oh_no");
  setTitle("You Clicked too Early!");
  setButton("Try Again");
}

function redScreen(setStyle, setTitle, setButton) {
  //Changes to wait
  console.log("redBegin");
  setStyle("styleBlockWait");
  setTitle("Wait For It");
  setButton("...");
  console.log("redEnd");
}

function blueScreen(setStyle, setTitle, setButton, timerTime) {
  // changes to the end screen where it tells the time
  setStyle("styleBlockBlue");
  setTitle(timerTime+"ms");
  setButton("Restart");
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
