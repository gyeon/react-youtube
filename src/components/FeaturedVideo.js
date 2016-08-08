import React from 'react';


class FeaturedVideo extends React.Component {
  render() {
    return(
      <div className="featured-video">
        <iframe width="420" height="315" src="https://www.youtube.com/embed/HPPj6viIBmU" frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
}

export default FeaturedVideo;
