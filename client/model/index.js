import Firebase from 'firebase';
import Config from 'config';
import React from 'react';

var Model = new Firebase(Config.firebaseURL);

export class ViewComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.model = Model;
    this._listeners = [];
  }
  
  addValueListener(child, callback) {
    let ref = child ? Model.child(child) : Model;
    callback = callback.bind(this);
    
    this._listeners.push({
      on: () => ref.on('value', callback),
      off: () => ref.off('value', callback)
    });
  }

  addAuthListener(callback) {
    callback = callback.bind(this);
    this._listeners.push({
      on: () => Model.onAuth(callback),
      off: () => Model.offAuth(callback)
    });
  }
  
  componentWillMount() {
    this._listeners.forEach((listener) => listener.on());
  }
  
  componentWillUnmount() {
    this._listeners.forEach((listener) => listener.off());
  }
}