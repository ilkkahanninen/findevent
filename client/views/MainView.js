import React from 'react';
import {Container, Row, Column} from 'components/Grid';
import EventCard from 'components/EventCard';

import {ViewComponent} from 'model';
import _ from 'lodash';

export default class MainView extends ViewComponent {
  
  constructor(props) {
    super(props);
    
    this.state = {
      events: {}
    };
    
    this.addValueListener('events', this.updateEvents);
  }
  
  updateEvents(snapshot) {
    this.setState({events: snapshot.val()});
  }
  
  render() {
    let index = 0;
    return (
      <Container>
        <Row>
          {_.map(this.state.events, (event, id) => <EventCard {...event} key={id} id={id} index={index++} />)}
        </Row>
      </Container>
    );
  }
}