import React, { Component, PropTypes } from 'react';
import {basicfact1, basicfact2, basicfact3} from './../svg/shapes.jsx'

export default class BasicFacts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="basic-facts">
        <div className="top-overlay"/>
        <div className="">
          <div className="fl w-100 pl6 mb4">
            <h1>Basic facts</h1>
          </div>
        </div>
        <div className="fl w-100">
          <div className="fl w-third center">
            {basicfact1}
            <h3 className="mb1">25 BILIONS</h3>
            <h4 className="mt1">Total cost of product</h4>
          </div>
          <div className="fl w-third center">
            {basicfact2}
            <h3 className="mb1">38 KILO</h3>
            <h4 className="mt1">Sturdust got back to earth</h4>
          </div>
          <div className="fl w-third center">
            {basicfact3}
            <h3 className="mb1">6 FLIGHTS</h3>
            <h4 className="mt1">To reach moon</h4>
          </div>
        </div>
      </div>
    );
  }
}
