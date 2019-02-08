'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  StatusBar,
  View,
  Platform,
  Navigator
} from 'react-native';

import {
  DInfoMainView,
  DInfoDetailAboutView,
  DInfoDetailCreditsView,
  DInfoDetailDepressionView,
  DInfoDetailFeedbackView,
  DInfoDetailManualView,
  DInfoDetailMessageView
} from 'AppScreens';

export class DInfoNavigator extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
          barStyle="dark-content"
        />
      <Navigator
        ref="navigator"
        parent={this}
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
        initialRoute={{main: {}}}
        renderScene={this.renderScene} />
      </View>
    );
  }

  handleBackButton() {
    if (this.props.navigator) {
      this.props.navigator.pop();
    }
  }

  renderScene(route, navigator) {
    if (route.message) {
      return <DInfoDetailMessageView navigator={navigator} />;
    }
    if (route.about) {
      return <DInfoDetailAboutView navigator={navigator} />;
    }
    if (route.manual) {
      return <DInfoDetailManualView navigator={navigator} />;
    }
    if (route.credits) {
      return <DInfoDetailCreditsView navigator={navigator} />;
    }
    if (route.depression){
      return <DInfoDetailDepressionView navigator={navigator} />;
    }
    if (route.feedback) {
      return <DInfoDetailFeedbackView navigator={navigator} />;
    }
    // return <DTestResultView navigator={navigator} />;
    return <DInfoMainView navigator={navigator} />;
  }  
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});