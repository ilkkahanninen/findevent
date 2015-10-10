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
    this._listeners.push({child, on: 'value', callback: callback.bind(this)});
  }
  
  componentWillMount() {
    this._listeners.forEach((listener) => {
      if (!listener._ref) {
        listener._ref = listener.child ? Model.child(listener.child) : Model;
      }
      listener._ref.on(listener.on, listener.callback);
    });
  }
  
  componentWillUnmount() {
    this._listeners.forEach((listener) => {
      listener._ref.off(listener.on, listener.callback);
    });
  }
}