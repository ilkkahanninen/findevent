import React from 'react';
import {Container, Row, Column} from 'components/Grid';
import AppBar from 'components/AppBar';

import {ViewComponent} from 'model';

export default class App extends ViewComponent {
  constructor(props) {
    super(props);
    this.addAuthListener(this.authUpdated);
  }
  
  authUpdated(auth) {
    this.setState({auth});
  }
  
  render() {
    console.log(this.state.auth);
    return (
      <div>
        <AppBar
          title="Tapahtumat"
          user={this.state.auth && this.state.auth.password.email}
          logout={() => this.model.unauth()}
        />
        {this.props.children}
      </div>
    );
  }
}