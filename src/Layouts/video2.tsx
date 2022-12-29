import React from "react";
import MyVideo from "../assets/videos/VID_20200205_180115.mp4";

class Video2 extends React.Component {
  render() {
    return (
      <video controls width="500px" height="400px" preload="auto">
        <source src={MyVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  }
}

export default Video2;
