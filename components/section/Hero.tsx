import React from "react";
import Separator from "../display/Separator";

function Hero() {
  return (
    <div id="home" className="pt-[100px] ">
      <video
        src="/video/hero-video.mp4"
        className="w-full h-auto "
        loop
        muted
        autoPlay
      ></video>
      <Separator direction="down" />
    </div>
  );
}

export default Hero;
