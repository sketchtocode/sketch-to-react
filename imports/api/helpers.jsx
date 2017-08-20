import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

export function renderWarpAccelrateEffect(max) {
    let flumesCords = []
    for (i=0;i<max;++i) {
      flumesCords.push({
        x:Math.floor(Math.random() * (350 + 150)),
        y:Math.floor(Math.random() * (1500 + 150)),
        height: Math.floor(Math.random() * (150 + 1)),
      })
    }
    const flumes = flumesCords.map(flume => {
      const flumeStyle = {
        top:`${flume.y}`,
        left: `${flume.x}`,
        height: `${flume.height}`
      };
      return (
        <div className="warp-speed-flum" style={flumeStyle} key={flume.x}/>
      )
    })
    return flumes
}
