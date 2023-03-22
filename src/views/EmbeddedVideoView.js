import React from "react";
import YoutubeEmbed from "../components/youtubeEmbed/YoutubeEmbed";
import "./EmbeddedVideoView.css";

const EmbeddedVideoView = () => {
  return (
    <div className="main-content-container">
      <YoutubeEmbed embedId={"IHL9u3uN65Q"} />
    </div>
  );
};

export default EmbeddedVideoView;
