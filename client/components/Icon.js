import React from 'react';

export default class Icon extends React.Component {
  render() {
    return <i className={'icon flaticon-' + this.props.icon} />;
  }
}