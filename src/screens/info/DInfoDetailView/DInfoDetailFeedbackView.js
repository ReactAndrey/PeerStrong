
'use strict';
import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  ScrollView,
  Platform,
  Image,
  Navigator,
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


export class DInfoDetailFeedbackView extends Component {
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
        centerLabel='PHQ-9 App'
        color={'white'}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel='PHQ-9 App'
          sideWidth={40}
          leftLabel=' '
          leftIcon='md-menu'
          leftAction={this.onLeftNavAction}
          color={'white'} 
        />
      );
    }
    return (
      <View style={styles.container}>
        {topNav}
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image 
              source={getImageFromName('firstLogo')}
              style={styles.logoImage}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.manualContainer}>
            <Text style={styles.descTitle}>
              The PHQ-9 app
            </Text>
            <Text style={styles.descText}>
              is the nine item depression scale of the <Text style={[styles.descText, styles.boldDesc]}>Paitent Health Questionnaire.</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={this.onPressTakeStart}
          >
            <Icon name="check" size={18} style={styles.checkmarkIcon} />
            <Text style={styles.startButtonText}>
              Take the test
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

DInfoDetailFeedbackView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func
};

