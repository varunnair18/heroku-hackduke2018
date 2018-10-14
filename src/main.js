import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage'
import Donate from './components/Donate';
import Results from './components/Results';
// import Contact from './contact';
// import Projects from './projects';
// import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
	<Route path="/donate" component={Donate} />
	<Route path="/results" component={Results} />
  </Switch>
)

export default Main;