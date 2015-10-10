import React from 'react';
import {Row, Column} from 'components/Grid';
import Icon from 'components/Icon';
import Avatar from 'components/Avatar';

require('style/EventCard.styl');

export default class EventCard extends React.Component {
  render() {
    
    const {id, index, type, ...props} = this.props;
    const coverStyle = {
      backgroundImage: this.props.image ? 'url(http://localhost/events/imageserver/card/' + id + '.jpg)' : null
    };
    
    let size = {sm: 6, lg: 4};
    if (index >= 6) {
      size = {sm: 6, lg: 3};
    }
    
    console.log(id, props, coverStyle);
    
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
      </Column>
    );
  }
}