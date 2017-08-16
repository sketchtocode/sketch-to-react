import React, { Component, PropTypes } from 'react';
import BegginingEvent from './Beggning-event.jsx'
import {projectSummary} from '../../../api/fixtures.jsx'
export default class BegginingTimeline extends Component {
  constructor(props) {
    super(props);
  }

  renderBegginingsTimeline() {
    if (projectSummary) {
      return(
        projectSummary.map((event, index) => (
          <BegginingEvent eventDescription={event.description} eventDate={event.date} key={event.designation}/>
        ))
      )
    } else {
      return null
    }
  }
  render() {
    return (
      <div className="begginings-timeline">
        <div className="pl6 mb4 mt5">
          {this.renderBegginingsTimeline()}
        </div>
      </div>
    );
  }
}
