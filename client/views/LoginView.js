import React from 'react';
import {Container, Row, Column} from 'components/Grid';
import Paper from 'components/Paper';
import {FormGroup, Input} from 'components/Form';

import {ViewComponent} from 'model';

export default class LoginView extends ViewComponent {
  
  constructor(props) {
    super(props);
  }
  
  login(evt) {
    evt.preventDefault();
    this.model.authWithPassword(
      {
        email: this.refs.email.val(),
        password: this.refs.password.val()
      },
      (error, authData) => {
        if (error) {
          this.setState({error});
        } else {
          // TODO: Transition to previous page
        }
      }
    );
  }
  
  render() {
    return (
      <Container className="page">
        <Paper>
          <Row>
            <Column sm={6}>
              <form onSubmit={this.login.bind(this)}>
                <FormGroup>
                  <Input label="Email" id="email" type="email" required={true} ref="email" />
                </FormGroup>
                <FormGroup>
                  <Input label="Password" id="password" type="password" required={true} ref="password" />
                </FormGroup>
                <FormGroup>
                  <Input type="submit" value="Log in" />
                </FormGroup>
              </form>
            </Column>
          </Row>
        </Paper>
      </Container>
    );
  }
  
}