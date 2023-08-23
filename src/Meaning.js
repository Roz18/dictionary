import React from "react";
import Synonyms from "./Synonyms";
import "./meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h3> {props.meaning.partOfSpeech} </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <br />
            <p>
              <em>{definition.example}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
