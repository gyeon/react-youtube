import React from 'react';


class FeaturedVideo extends React.Component {
  render() {
    return(
      <div>
        <iframe width="420" height="315" src={this.props.url}></iframe>
      </div>
    )
  }
}

export default FeaturedVideo;
