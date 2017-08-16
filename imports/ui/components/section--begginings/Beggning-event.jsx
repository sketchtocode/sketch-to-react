import React, { Component, PropTypes } from 'react';


export default class BegginingEvent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="begginings-single-event fl w-100 mt2">
        <div className="fl w-10">
          <div className="dot-wrapper"><span className="dot"/></div>
        </div>
        <div className="fl w-30">
          <div className="event-date mr3 ml3">{this.props.eventDate}</div>
        </div>
        <div className="fl w-60">
        <div className="event-description">{this.props.eventDescription}</div>
        </div>
      </div>
    );
  }
}
