import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CountriesList from './CountriesList';
import DayliesList from './DayliesList';
import NotFound from './NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={CountriesList} />
    <Route exact path="/Daylies" component={DayliesList} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
