import React from 'react';
import Video from './Video.js'

const VideoList = function VideoList(props) {
var singleVideo = []
 const videoItems = props.allVideos.map((item) => {
  singleVideo.push(<Video key={item.id.videoId} title={item.snippet.title} description={item.snippet.description} thumbnail={item.snippet.thumbnails.default.url} iframe={`https://www.youtube.com/embed/${item.id.videoId}`} />
  )
  }
 )
 return (
   <div className="col-sm-4">{singleVideo}</div>
 )
}

export default VideoList;
