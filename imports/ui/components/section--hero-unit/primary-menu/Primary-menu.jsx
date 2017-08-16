import React, { Component, PropTypes } from 'react';
import MenuItem from './Menu-item.jsx';
import {menuItems} from '../../../../api/fixtures.jsx'
export default class PrimaryMenu extends Component {
  constructor(props) {
    super(props);
    console.log(menuItems)
  }
  renderMenu() {
    return(
      menuItems.map(item => (
        <MenuItem item={item.title} key={item.title}/>
      ))
    )
  }
  render() {
    return (
      <div className="primary-menu">
        <div className="border"/>
        {this.renderMenu()}
      </div>
    );
  }
}
