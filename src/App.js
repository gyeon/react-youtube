import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';
import VideoBar from './components/VideoBar.js';
import FeaturedVideo from './components/FeaturedVideo.js';


class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="container">
        <SearchBar />
        <div className="row">
          <div className="col-sm-8">
            <FeaturedVideo />
          </div>
          <div className="col-sm-4">
            <VideoBar />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
// description() {
//     this.setState({description: this.props.description})
// }
