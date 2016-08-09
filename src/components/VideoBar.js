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
        <span className="videoBar"><VideoList allVideos={this.state.videos} updateFeaturedVideo={this.props.updateFeaturedVideo} swapOutFeaturedVideo={this.props.swapOutFeaturedVideo}/></span>
    )
  }
}

export default VideoBar;
