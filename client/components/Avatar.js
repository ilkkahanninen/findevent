import React from 'react';
require('style/Avatar.styl');

export default class Avatar extends React.Component {
  render() {
    return <div className="avatar">{this.props.children}</div>;
  }
}