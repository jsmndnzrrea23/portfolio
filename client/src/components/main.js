import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import Skills from './skills';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route exact path="/skills" component={Skills} />
		<Route exact path="/contact" component={Contact} />
		<Route exact path="/projects" component={Projects} />								
	</Switch>	
)

export default Main;