import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./result.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="resultShearch">
        <div className="WordPhone">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
          ;
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
