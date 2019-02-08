'use strict';

// var { Provider } = require('react-redux');
// var configureStore = require('./store/configureStore');
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { DApp } from './DApp';
import configureStore from './store/configureStore';
export class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }
  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <DApp />
      </Provider>
    );
  }
}
