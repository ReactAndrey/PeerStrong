
'use strict';
import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  ScrollView,
  Platform,
  Image,
  Navigator,
  StatusBar,
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


export class DTestMainView extends Component {
  props: {
    navigator: Navigator;
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    
  }

  // Actions
  onLeftNavAction = () => {
    this.context.openDrawer();
  }

  onPressTakeStart = () => {
    this.context.onMoveToSurvey();
  }

  // Render
  render() {
    let topNav = (
      <TopNavBar
        centerLabel='The Test'
        color={'white'}
        bottomColor={'rgba(150, 150, 150, 0.4)'}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel='The Test'
          sideWidth={40}
          leftLabel=' '
          leftIcon='md-menu'
          leftAction={this.onLeftNavAction}
          color={'white'}
          leftIconColor={'white'}
          bottomColor={'rgba(150, 150, 150, 0.4)'}
        />
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />
        {topNav}
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image 
              source={getImageFromName('clipboardPen')}
              style={styles.logoImage}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.manualContainer}>
            <Text style={styles.descTitle}>
              The PHQ-9 app
            </Text>
            <Text style={styles.descText}>
              The PHQ-9 is a 9-question test for diagnosing, monitoring, and measuring the severity of depression.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={this.onPressTakeStart}
          >
            <Text style={styles.startButtonText}>
              Take the test
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

// <Icon name="check" size={18} style={styles.checkmarkIcon} />
DTestMainView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func,
  openDrawer: React.PropTypes.func
};

