import React, { Component, PropTypes } from 'react';
import PrimaryMenu from './primary-menu/Primary-menu.jsx'
export default class SectionHeroUnit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hero unit</h1>
        <PrimaryMenu/>
      </div>
    );
  }
}
