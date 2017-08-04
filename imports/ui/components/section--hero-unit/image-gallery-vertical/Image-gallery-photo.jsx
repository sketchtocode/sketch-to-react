import React, { Component, PropTypes } from 'react';
export default class ImageGalleryPhoto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="image-gallery-photo">
        <img src={this.props.url}/>
      </div>
    );
  }
}
