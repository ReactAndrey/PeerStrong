/**
 * @providesModule DStyleSheet
 * @flow
 */

'use strict';

import {
  StyleSheet, 
  Platform
} from 'react-native';
export function create(styles: Object): {[name: string]: number} {
  const platformStyles = {};
  Object.keys(styles).forEach((name) => {
    let {ios, android, tablet, ...style} = {...styles[name]};
    if (ios && Platform.OS === 'ios') {
      style = {...style, ...ios};
    }
    if (android && Platform.OS === 'android') {
      style = {...style, ...android};
    }
    // if (tablet && DeviceInfo.isTablet() === true) {
    //   style = {...style, ...tablet}; 
    // }
    platformStyles[name] = style;
  });
  return StyleSheet.create(platformStyles);
}
