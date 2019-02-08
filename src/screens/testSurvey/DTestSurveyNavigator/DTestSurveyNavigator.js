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
  DTestStartView,
  DTestSwipeView,
  DTestSurveyView,
  DTestEndView
} from 'AppScreens';

export class DTestSurveyNavigator extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  // * Context
  getChildContext() {
    return {
      onMoveToTab: this.onMoveToTab
    };
  }

  onMoveToTab = () => {
    if (this.props.navigator) {
      this.props.navigator.replace({main: {}});
    }
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
      return (
        <DTestSurveyView
          navigator={navigator}
        />
      )
    }
    if (route.start) {
      return (
        <DTestStartView
          navigator={navigator}
        />
      )
    }
    if (route.swipe) {
      return (
        <DTestSwipeView
          navigator={navigator}
        />
      )
    }
    if (route.end) {
      return (<DTestEndView navigator={navigator} />);
    }
    // return (<DTestEndView navigator={navigator} />);
    // return <DTestSurveyView navigator={navigator} />;
    // return <DTestSwipeView navigator={navigator} />;
    return <DTestStartView navigator={navigator} />;
  }  
}

DTestSurveyNavigator.childContextTypes = {
  onMoveToTab: React.PropTypes.func
};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});