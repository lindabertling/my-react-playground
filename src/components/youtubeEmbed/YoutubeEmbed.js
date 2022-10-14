import React from "react";
// import "./YoutubeEmbed.css";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => {
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
  };

  return (
    <div className="video-responsive">
      <iframe
        title="embedded-youtube"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
