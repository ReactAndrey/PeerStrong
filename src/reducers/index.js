'use strict';

import { combineReducers } from 'redux'

module.exports = combineReducers({
  questions: require('./questions'),
  history: require('./history'),
  navigation: require('./navigation')
});
