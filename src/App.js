import React, { useState } from "react";
import "./styles.css";
var emojiDirectory = {
  "😊": "similing",
  "😂": "Face with Tears of Joy",
  "😔": "sad",
  "😟": "worrid",
  "😠": "angry"
};
var emojiWeknown = Object.keys(emojiDirectory);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiinputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDirectory[userInput];
    //console.log(meaning);
    if (meaning === undefined) {
      meaning = "we don't have in this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDirectory[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">inside Out</h1>
      <input onChange={emojiinputHandler}></input>
      <h2>{meaning}</h2>
      <h3>emoji we known</h3>
      {emojiWeknown.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
