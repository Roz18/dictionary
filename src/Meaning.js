import React from "react";
import Synomyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h3> {props.meaning.partOfspeech} </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {" "}
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <Synomyms synonyms={definition.synonyms} />
            </p>{" "}
          </div>
        );
      })}
    </div>
  );
}
