import React from 'react';
import Video from './Video.js'

const VideoList = function VideoList(props) {

 const videoItems = props.allVideos.map((item) => {
   return <Video key={item.id.videoId} updateFeaturedVideo={props.updateFeaturedVideo} swapOutFeaturedVideo={props.swapOutFeaturedVideo} title={item.snippet.title} description={item.snippet.description} thumbnail={item.snippet.thumbnails.default.url} iframe={`https://www.youtube.com/embed/${item.id.videoId}`} />

  }
 )
 return (
   <div>{videoItems}</div>
 )
}

export default VideoList;
