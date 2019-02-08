'use strict';

import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  BackAndroid,
  StyleSheet,
  View,
  Navigator
} from 'react-native';
import DColors from 'DColors';
import {
  WelcomeMain,
  DTabsView,
  DResultMainView,
  DTestSurveyNavigator
} from 'AppScreens';

export default class DNavigator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstNav: {main: {}},
      loaded: false
    }
    this._handlers = [];
    this.loadData();
  }

  loadData () {
    AsyncStorage.getItem('is_welcome_screen').then((isWelcome) => {
      this.setState({loaded: true});
      if (isWelcome !== 'true') {
        // this.setState({firstNav:{welcome: {}}});
        if (this.refs.navigator) {
          this.refs.navigator.replace({welcome: {}});
        }
      }
    }).done();
  }

  componentWillMount() {

  }

  componentDidMount() {
    // BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
    // this.loadData();
  }

  componentWillReceiveProps(nextProps) {
    
  }
  
  componentWillUnmount() {
    // BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener,
    };
  }

  addBackButtonListener = (listener) => {
    this._handlers.push(listener);
  }

  removeBackButtonListener = (listener) => {
    this._handlers = this._handlers.filter((handler) => handler !== listener);
  }

  handleBackButton = () => {
    for (let i = this._handlers.length - 1; i >= 0; i--) {
      if (this._handlers[i]()) {
        return true;
      }
    }

    const {navigator} = this.refs;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }
  }

  render() {
    const { firstNav, loaded } = this.state;
    if (loaded === false) {
      return (<View style={styles.container}/>);
    }
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          return Navigator.SceneConfigs.PushFromRight;
          
        }}
        initialRoute={firstNav}
        renderScene={this.renderScene} />
    );
  }

  renderScene(route, navigator) {
    if (route.main) {
      return <DTabsView navigator={navigator} />; 
    }
    if (route.survey) {
      return <DTestSurveyNavigator navigator={navigator} />;
    }
    // return <DResultMainView navigator={navigator} />;
    // return <DTestSurveyNavigator navigator={navigator} />;
    // return <DTabsView navigator={navigator} />;
    return <WelcomeMain navigator={navigator} />;
  }
}

DNavigator.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DColors.darkBlue,
  },
});

// module.exports = DNavigator;
