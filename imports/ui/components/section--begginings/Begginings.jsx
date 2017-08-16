import React, { Component, PropTypes } from 'react';
import BegginingTimeline from './Beggining-timeline.jsx';
import {voyager} from './../svg/shapes.jsx';
import {renderWarpAccelrateEffect} from '../../../api/fixtures.jsx'
import $ from 'jquery';
export default class Beggnings extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(window).scroll(() => {
      const begginingsTop = $('.begginings').offset().top
      const voyagerTop = $('#voyager').offset().top
      const scroll = $(window).scrollTop();
      if (scroll > voyagerTop) {
        $('#voyager').addClass('fixed');
      } else if (scroll <= begginingsTop) {
        $('#voyager').removeClass('fixed');
      } else {

      }
    });
  }

  render() {
    const flumes = renderWarpAccelrateEffect(150);
    return (
      <div className="begginings">
        <div className="fl w-100 pl6 mb4">
          <h1>Begginings</h1>
        </div>
        <div className="fl w-30 pl6 mb4">
            {flumes}
          <div id="voyager">
            {voyager}
          </div>
        </div>
        <div className="fl w-70 pa2">
          <BegginingTimeline/>
        </div>
      </div>
    );
  }
}
