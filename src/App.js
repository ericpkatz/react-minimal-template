import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Other from './Other';

export default ()=> (
  <Router>
    <Fragment>
      <Route component={ Nav } />
      <Route path='/' exact component={ Home } />
      <Route path='/other' component={ Other } />
    </Fragment>
  </Router>
);

