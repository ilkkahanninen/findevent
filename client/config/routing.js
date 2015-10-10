import React from 'react';
import {Router, IndexRoute, Route, Link} from 'react-router';
import App from 'App';

import MainView from 'views/MainView';
import EventView from 'views/EventView';

import ReactRouter from 'react-router';

export default class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={MainView} />
          <Route path="event/:id" component={EventView} />
        </Route>
      </Router>
    );
  }
};