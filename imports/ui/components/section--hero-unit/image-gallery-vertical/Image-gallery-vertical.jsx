import React, { Component, PropTypes } from 'react';
import ImageGalleryPhoto from './Image-gallery-photo.jsx';
export default class ImageGalleryVertical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }
  getImagesFromCuriosity() {
    return (
      HTTP.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1001&api_key=wGY8dKKEiYAnNVJUmDsi9diGimt5LgHqViLOPbBe', (error, data)  => {
        if (data) {
          this.setState(
            { images: data.data.photos}
          )
        }
      })
    )
  }
  componentWillMount() {
    this.getImagesFromCuriosity()
  }
  renderImagesGallery() {
    if (this.state.images) {
      return(
        this.state.images.map((image, index) => (
          ((index < 50) ? <ImageGalleryPhoto url={image.img_src}/> : null)
        ))
      )
    } else {
      return null
    }
  }
  render() {
    return (
      <div>
        {this.renderImagesGallery()}
      </div>
    );
  }
}
