import React from "react";

export default function Synomyms(props) {
  if (props.Synomyms) {
    return (
      <div className="Synomyms">
        {" "}
        {props.synonyms.map(function (synomyms, index) {
          return <span kye={index}>{synomyms}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
