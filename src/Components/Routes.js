import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CountriesList from '../Containers/CountriesList';
import DayliesList from '../Containers/DayliesList';
import NotFound from './NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={CountriesList} />
    <Route path="/:id" component={DayliesList} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
