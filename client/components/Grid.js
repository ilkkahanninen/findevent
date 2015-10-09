import React from 'react';

export class Container extends React.Component {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export class Row extends React.Component {
  render() {
    return <div className="row">{this.props.children}</div>;
  }
}

export class Column extends React.Component {
  render() {
    let classes = [];
    let {children, className, style, ...sizes} = this.props;
    
    if (className) {
      classes.push(className);
    }
    for (let key in sizes) {
      classes.push('col-' + key + '-' + sizes[key]);
    }
         
    return <div className={classes.join(' ')} style={style}>{children}</div>;
  }
}