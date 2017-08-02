import React, { Component, PropTypes } from 'react';
export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.item}
      </div>
    );
  }
}
