import React, { Component, PropTypes } from 'react';
import MenuItem from './Menu-item.jsx';

export default class PrimaryMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MenuItem item="Basic facts"/>
        <MenuItem item="Begginings"/>
        <MenuItem item="Rockets"/>
        <MenuItem item="Astronomers"/>
        <MenuItem item="Contact"/>
      </div>
    );
  }
}
