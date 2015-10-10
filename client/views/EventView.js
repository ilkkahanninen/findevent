import React from 'react';
import {Container, Row, Column} from 'components/Grid';
import Paper from 'components/Paper';

import {ViewComponent} from 'model';
import _ from 'lodash';
import Config from 'config';

require('style/EventPage.styl');

export default class MainView extends ViewComponent {
  
  constructor(props) {
    super(props);
    
    this.state = {
      events: {}
    };
    
    this.addValueListener(`events/${props.params.id}`, this.updateEvent);
  }
  
  updateEvent(snapshot) {
    this.setState({event: snapshot.val()});
  }
  
  render() {
    const event = this.state.event;
    
    if (event) {
      const coverStyle = event.image ? {
        backgroundImage: `url(${Config.getImageURL('banner', event.image)})`
      } : null;
      
      return (
        <Container className="page eventPage">
          <Row>
            <Column sm={8}>
              {coverStyle && <div className="cover" style={coverStyle} />}
              <Paper>
                <h1>{event.title}</h1>
              </Paper>
            </Column>
            <Column sm={4}>
              Tänne linkkejä muihin tapahtumiin
            </Column>
          </Row>          
        </Container>
      );
    } else {
      return (
        <Container className="page">
          <Paper>
            <p>Loading...</p>
          </Paper>
        </Container>
      );
    }
  }
}