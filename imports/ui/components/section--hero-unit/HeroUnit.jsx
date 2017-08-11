import React, { Component, PropTypes } from 'react';
import PrimaryMenu from './primary-menu/Primary-menu.jsx';
import ImageGalleryVertical from './image-gallery-vertical/Image-gallery-vertical.jsx';
import Typed from 'typed.js';
import {orbit, orbit2, satellite} from './../svg/shapes.jsx'
export default class SectionHeroUnit extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var options = {
    strings: [
    "Contact light.",
    "Magnificent desolation.",
    "Failure is not an option.",
    "Okay, Houston, we’ve had a problem here.",
    "I feel fine. How about you ...",
    "One Small Step for Man ...",
    ],
    typeSpeed: 70,
    startDelay: 1000,
    backSpeed: 70,
    loop: true
  }

  var typed = new Typed("h2", options);
  }
  componentWillMount() {

  }
  render() {
    return (
      <div className="hero-unit-wrapper">
        <div className="hero-unit-background">
        </div>
        <div className="fl w-30">
          {orbit}
          {orbit2}
          <ImageGalleryVertical/>
        </div>
        <div className="fl w-70 pa2">
          {satellite}
          <div className="element">
          </div>
          <PrimaryMenu/>
          <h1>Project Apollo</h1>
          <h2></h2>
        </div>
      </div>
    );
  }
}
