import React from 'react';
import {Row, Column} from 'components/Grid';
import Icon from 'components/Icon';
import Avatar from 'components/Avatar';
import {Link} from 'react-router';
import Config from 'config';

require('style/EventCard.styl');

export default class EventCard extends React.Component {
  
  render() {
    
    const {id, index, type, ...props} = this.props;
    const coverStyle = {
      backgroundImage: this.props.image ? `url(${Config.getImageURL('card', this.props.image)})` : null
    };
    
    let size = {sm: 6, lg: 4};
    if (index >= 6) {
      size = {sm: 6, lg: 3};
    }
    
    return (
      <Column {...size} className="eventCard" style={coverStyle}>
        <Avatar>
          <Icon icon={type || 'music'} />
        </Avatar>
        <div className="eventCardContent">
          <div className="title">
            {props.title}
          </div>
          <div className="details">{props.time}, {props.location}</div>
        </div>
        <Link to={`/event/${id}`} />
      </Column>
    );
  }
}