import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui segment">
        <div className="ui header">
          {video.snippet.title}
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default VideoDetail;
