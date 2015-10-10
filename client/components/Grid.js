import React from 'react';

export class Container extends React.Component {
  render() {
    const {children, className, ...props} = this.props;
    return <div className={"container " + className} {...props}>{children}</div>;
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
    let {children, className, style, onClick, ...sizes} = this.props;
    
    if (className) {
      classes.push(className);
    }
    for (let key in sizes) {
      classes.push('col-' + key + '-' + sizes[key]);
    }
         
    return <div className={classes.join(' ')} onClick={onClick} style={style}>{children}</div>;
  }
}