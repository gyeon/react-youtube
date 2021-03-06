import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';
import VideoBar from './components/VideoBar.js';
import FeaturedVideo from './components/FeaturedVideo.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {featuredVideo: "https://www.youtube.com/embed/HPPj6viIBmU", updatedVideo: "https://www.youtube.com/embed/HPPj6viIBmU"}
    this.updateFeaturedVideo = this.updateFeaturedVideo.bind(this)
    this.updateVideoBar = this.updateVideoBar.bind(this)
    this.swapOutFeaturedVideo = this.swapOutFeaturedVideo.bind(this)

  }

  render() {
    return (
      <div className="container">
        <SearchBar className="col-xs-8"/>
        <div className="row">
          <div className="col-sm-8">
            <FeaturedVideo url={this.state.featuredVideo}/>
          </div>
          <div className="col-sm-4">
            <VideoBar className="col-xs-4" updateFeaturedVideo={this.updateFeaturedVideo} swapOutFeaturedVideo={this.swapOutFeaturedVideo}/>
          </div>
        </div>
      </div>
    );
  }

  updateFeaturedVideo(featuredVideo){
    this.setState({featuredVideo})
  }

  swapOutFeaturedVideo(){
    return this.state.featuredVideo
  }

  updateVideoBar(updatedVideo){
    this.setState({updatedVideo})
  }
}


export default App;
// description() {
//     this.setState({description: this.props.description})
// }
