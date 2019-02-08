/**
 */

'use strict';

const Parse = require('parse/react-native');
const {AppEventsLogger} = require('react-native-fbsdk');

import type {Action} from '../actions/types';

function track(action: Action): void {
  switch (action.type) {
    case 'APPLY_TOPICS_FILTER':
      AppEventsLogger.logEvent('Filtered', 1);
      break;
  }
}

module.exports = track;
