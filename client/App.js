import React from 'react';
import {Container, Row, Column} from 'components/Grid';
import EventCard from 'components/EventCard';
import _ from 'lodash';

import Firebase from 'firebase';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events: {}
    };
  }
  
  componentWillMount() {
    this.firebase = new Firebase('https://findevent.firebaseio.com');
    
    this.firebase.child('events').on('value', (snapshot) => {
      /*
      if (!snapshot.val()) {
        // Write test data
        let events = {};
        for (let i = 0; i < 10; i++) {
          events[i] = {
            title: 'Event #' + (i + 1),
            location: 'Kokkola',
            description: 'Best event ever',
            image: i + '.jpg'
          };
        }
        this.firebase.update({events});
        this.firebase.update({foo: 'bar'});
      }
      */
      
      this.setState({events: snapshot.val()});
    });
    
  }
  
  render() {
    return (
      <Container>
        <Row>
          {_.toArray(this.state.events).map((event, index) => <EventCard {...event} index={index} />)}
        </Row>
      </Container>
    );
  }
}