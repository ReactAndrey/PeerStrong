'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  View,
  Platform,
  Navigator
} from 'react-native';

import {
  DTestMainView,
} from 'AppScreens';

export class DTestNavigator extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        parent={this}
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          if (route.term || route.policy) {
            return Navigator.SceneConfigs.FloatFromBottom;  
          }
          if (route.menteeChat) {
            return Navigator.SceneConfigs.FloatFromLeft;  
          }
          return Navigator.SceneConfigs.PushFromRight;
        }}
        initialRoute={{}}
        renderScene={this.renderScene} />
    );
  }

  handleBackButton() {
    if (this.props.navigator) {
      this.props.navigator.pop();
    }
  }

  renderScene(route, navigator) {
    if (route.survey) {
      // Move to the 
    }
    if (route.result) {
      return <DTestResultView navigator={navigator} />;
    }
    // return <DTestResultView navigator={navigator} />;
    return <DTestMainView navigator={navigator} />;
  }  
}




var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});