/**
 * @providesModule DApp
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  StatusBar,
  Platform,
  AsyncStorage,
  View
} from 'react-native';
import DNavigator from './DNavigator';

export class DApp extends Component {

  componentWillMount() {
    
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  componentWillReceiveProps(nextProps) {

  }

  handleAppStateChange(appState) {
    if (appState === 'active') {
      
    }
  }

  updateAppAccessTimestamp() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />
        <DNavigator role="none" />
        
      </View>
    );
  }
  // { (Platform.OS === 'ios') ? (<KeyboardSpacer topSpacing={ (Platform.OS === 'ios') ? -49 : 0}/>) : (null)}
} 

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

