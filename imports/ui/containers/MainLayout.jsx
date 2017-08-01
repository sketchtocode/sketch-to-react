import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SectionHeroUnit from '../components/section--hero-unit/HeroUnit.jsx';


export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
          <SectionHeroUnit/>
      </div>
    );
  }
}
