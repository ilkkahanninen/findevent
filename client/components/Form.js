import React from 'react';

export class FormGroup extends React.Component {
  render() {
    let classes = ['form-group'];
    if (this.props.inline) {
      classes.push('inline');
    }
    return <div className={classes.join(' ')}>{this.props.children}</div>;
  }
}

export class Input extends React.Component {
  
  val() {
    return React.findDOMNode(this.refs.input).value;
  }
  
  render() {
    let {id, ...inputProps} = this.props;
    id = id || Math.random();
         
    return (
      <div>
        {this.props.label && <label htmlFor={id}>{this.props.label}</label>}
        <input ref="input" name={id} {...inputProps} />
      </div>
    );
  }
}