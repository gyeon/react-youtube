import React from 'react';
import VideoList from './VideoList.js';
import StaticData from './StaticData.js';


const VideoBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {videos: StaticData}
  }

  render() {
    return (
      <div className= "VideoContainer">
        <span><VideoList allVideos={this.state.videos} /></span>
      </div>
    )
  }
}

export default VideoBar;
