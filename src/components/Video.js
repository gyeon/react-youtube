import React, { Component } from 'react';

class Video extends Component {
  constructor(props){
    super(props)
    this.state = {url: props.iframe}
  }
  render() {
    return (
      <div onClick={this.handleVideoSelection.bind(this)}>
        <iframe src={this.state.url}/>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }

  handleVideoSelection(){
    this.setState({url: this.props.swapOutFeaturedVideo()})
    this.props.updateFeaturedVideo(this.props.iframe)
  }


};

export default Video;
