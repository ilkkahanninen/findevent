import React from 'react';
require('style/Paper.styl');

export default class Paper extends React.Component {
  render() {
    const {children, className, ...props} = this.props;
    return <div className={"paper " + className} {...props}>{children}</div>;
  }
}