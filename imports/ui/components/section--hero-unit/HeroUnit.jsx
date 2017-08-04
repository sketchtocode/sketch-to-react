import React, { Component, PropTypes } from 'react';
import PrimaryMenu from './primary-menu/Primary-menu.jsx';
import ImageGalleryVertical from './image-gallery-vertical/Image-gallery-vertical.jsx';

export default class SectionHeroUnit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hero unit</h1>
        <PrimaryMenu/>
        <ImageGalleryVertical/>
      </div>
    );
  }
}
