/**
 * @providesModule AppActions
 * @flow
 */

'use strict';

const questions = require('./questions');
const navigations = require('./navigation');
module.exports = {
  ...questions,
  ...navigations
};
