import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../constants";

const Intro = () => {
  // State to track if the video is playing
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef(null); // Reference for the video element

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    // Toggle play/pause based on current state
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <section className="relative flex items-center justify-center h-screen bg-black">
      {/* Video element with Tailwind styling */}
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        muted
        className="w-full h-full object-cover"
      />

      {/* Overlay with play/pause button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handleVideo}
          className="flex items-center justify-center w-24 h-24 border-2 border-golden rounded-full"
        >
          {/* Conditional rendering for play/pause icon */}
          {playVideo ? (
            <BsPauseFill className="text-3xl text-white" />
          ) : (
            <BsFillPlayFill className="text-3xl text-white" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Intro;
