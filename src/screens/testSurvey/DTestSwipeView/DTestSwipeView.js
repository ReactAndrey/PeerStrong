
'use strict';
import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  ScrollView,
  Platform,
  Image,
  Navigator,
  PanResponder,
  TouchableOpacity
} from 'react-native';
// External Libraries
import Icon from 'react-native-vector-icons/FontAwesome';

// User Customized
var DColors = require('DColors');
import { Text } from 'DText';
import { getImageFromName } from 'DUtils';
import {
  TopNavBar,
} from 'AppComponents';

// Styles
import { styles } from './styles';


export class DTestSwipeView extends Component {
  props: {
    navigator: Navigator;
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this._panResponder = {};
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this.setMove,
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderEnd: this.handleMoveEnd
    });
  }

  setMove = (_, gestureState) => {
    return true;
  }

  handleMove(evt, gestureState) {
    
  }

  handleMoveEnd = (evt, gestureState, forceAnimationBack) => {
    console.log("GestureState.. End=", gestureState.dx);
    if (gestureState.dx < -50) {
      // This means user swipe from right to left
      // if (this.context.onMoveToTab) {
      //   this.context.onMoveToTab();
      // }
      if (this.props.navigator) {
        this.props.navigator.push({survey: {}});
      }
    }
  }

  // Actions
  onLeftNavAction = () => {
    this.context.openDrawer();
  }

  onPressStart = () => {
    if (this.props.navigator) {
      this.props.navigator.push({swipe: {}});
    }
  }

  // Render
  render() {
    return (
      <View style={styles.container}>
        <View 
          style={styles.content}
          {...this._panResponder.panHandlers}
        >
          <View style={styles.manualContainer}>
            <Text style={styles.descText}>
              <Text style={[styles.descText, styles.boldDesc]}>
                Over the last 2 weeks
              </Text>
              , how often have you been bothered by any of following problems?
            </Text>
          </View>
          <View style={styles.startContainer}>
            <Text style={styles.startText}>
              SWIPE TO START
            </Text>
            <View style={styles.startImageContainer}>
              <Image 
                source={getImageFromName('swipeStart')}
                style={styles.startImage} 
                resizeMode={'contain'}
              />
            </View>
          </View>
        </View>

      </View>
    );
  }
}

DTestSwipeView.contextTypes = {
  openDrawer: React.PropTypes.func,
  onMoveToTab: React.PropTypes.func
};

