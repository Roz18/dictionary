import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioPlay = () => {
    setIsPlaying(true);
  };

  const handleAudioPause = () => {
    setIsPlaying(false);
  };
  if (!props.phonetic.audio) {
    return null;
  }

  return (
    <div className="Phonetic">
      <ReactAudioPlayer
        src={props.phonetic.audio}
        autoPlay={isPlaying}
        controls
        onPlay={handleAudioPlay}
        onPause={handleAudioPause}
      />
      <br />
      {props.phonetic.text}
    </div>
  );
}
