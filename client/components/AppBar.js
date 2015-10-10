import React from 'react';
import {Container} from 'components/Grid';
import {Link} from 'react-router';
require('style/AppBar.styl');

export default class AppBar extends React.Component {
  
  logout(evt) {
    evt.preventDefault();
    if (this.props.logout) {
      this.props.logout();
    }
  }
  
  render() {
    
    let login = () => {
      return (
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
      );
    }
    
    let logout = () => {
      return (
        <div className="login">
          Logged in as {this.props.user}.
          <a href="#" onClick={this.logout.bind(this)}>Log out</a>
        </div>
      );
    }
    
    return (
      <div className="appBar">
        <Container>
          <h1>{this.props.title}</h1>
          {this.props.user ? logout() : login()}
        </Container>
      </div>
    );
  }
}