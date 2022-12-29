import React from "react";
import MyVideo from "../assets/videos/QVZkT0VLdUxzODc4cmhweQ.mp4";

class MyVideoComponent extends React.Component {
  render() {
    return (
      <video controls width="500px" height="400px" preload="auto">
        <source src={MyVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  }
}

export default MyVideoComponent;
