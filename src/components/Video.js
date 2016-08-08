import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <ul>
        <iframe src={this.props.iframe}/>
        <p>{this.props.title}</p>
      </ul>
    )
  }
};

export default Video;
