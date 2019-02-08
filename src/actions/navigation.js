/**
 */

'use strict';

import type { Action } from './types';

type Tab = 'tests' | 'results' | 'history' | 'info';

module.exports = {
  switchTab: (tab: Tab): Action => ({
    type: 'SWITCH_TAB',
    tab,
  })
};
