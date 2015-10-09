import React from 'react';
import {Router, Route, Link} from 'react-router';
import App from 'App';

import ReactRouter from 'react-router';
console.log(ReactRouter);


export default class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
        </Route>
      </Router>
    );
  }
};