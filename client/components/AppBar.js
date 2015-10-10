import React from 'react';
import {Container} from 'components/Grid';
require('style/AppBar.styl');

export default class AppBar extends React.Component {
  render() {
    return (
      <div className="appBar">
        <Container>
          <h1>{this.props.title}</h1>
        </Container>
      </div>
    );
  }
}