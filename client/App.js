import React from 'react';
import {Container, Row, Column} from 'components/Grid';
import AppBar from 'components/AppBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="Kalenteri LOL 1234" />
        {this.props.children}
      </div>
    );
  }
}