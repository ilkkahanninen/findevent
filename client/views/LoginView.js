import React from 'react';
import {Container, Row, Column} from 'components/Grid';
import Paper from 'components/Paper';
import {FormGroup, Input} from 'components/Form';

import {ViewComponent} from 'model';

require('style/LoginView.styl');

const ERROR_MESSAGES = {
  INVALID_USER: 'Väärä sähköpostiosoite',
  INVALID_PASSWORD: 'Väärä salasana'
};
const DEFAULT_ERROR_MESSAGE = 'Kirjautuminen epäonnistui';

export default class LoginView extends ViewComponent {
  
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.setState({
      userMessage: null,
      error: null
    });
  }
  
  login(evt) {
    evt.preventDefault();
    this.setState({userMessage: 'Kirjaudutaan...'});
    this.model.authWithPassword(
      {
        email: this.refs.email.val(),
        password: this.refs.password.val()
      },
      (error, authData) => {
        this.setState({userMessage: null});
        if (error) {
          this.setState({error});
        } else {
          this.props.history.replaceState('/');
        }
      }
    );
  }
  
  render() {
    return (
      <Container className="page loginView">
        <Paper>
          <Row>
            <Column sm={6}>
              {this.state.error && <div className="errorMessage">{ERROR_MESSAGES[this.state.error.code] || DEFAULT_ERROR_MESSAGE}</div>}
              <form onSubmit={this.login.bind(this)}>
                <FormGroup>
                  <Input label="Email" id="email" type="email" required={true} ref="email" />
                </FormGroup>
                <FormGroup>
                  <Input label="Password" id="password" type="password" required={true} ref="password" />
                </FormGroup>
                <FormGroup>
                  <Input type="submit" value="Log in" />
                  {this.state.userMessage && <div className="userMessage">{this.state.userMessage}</div>}
                </FormGroup>
              </form>
            </Column>
          </Row>
        </Paper>
      </Container>
    );
  }
  
}
