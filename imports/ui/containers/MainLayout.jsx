import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SectionHeroUnit from '../components/section--hero-unit/HeroUnit.jsx';
import SectionBasicFacts from '../components/section--basic-facts/BasicFacts.jsx'
import SectionBegginings from '../components/section--begginings/Begginings.jsx'
export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
          <SectionHeroUnit/>
          <SectionBasicFacts/>
          <SectionBegginings/>
      </div>
    );
  }
}
