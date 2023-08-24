import React from "react";
import "./photo.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos">
        <div className="box">
          {props.photos.map(function (photo, index) {
            return (
              <a
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
                className="photo"
                key={index}
              >
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt="example of definition"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
