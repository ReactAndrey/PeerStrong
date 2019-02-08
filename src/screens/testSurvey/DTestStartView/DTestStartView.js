
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


export class DTestStartView extends Component {
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

  onPressStart = () => {
    if (this.props.navigator) {
      this.props.navigator.push({swipe: {}});
    }
  }

  // Render
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.manualContainer}>
            <Text style={styles.descText}>
              In every life we have some trouble. When you worry you make it double.
            </Text>
            <Text style={styles.descTitle}>
              Don't worry, 
              be happy.
            </Text>
            <Text style={styles.descName}>
            - Bobby McFerrin
            </Text>
          </View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={this.onPressStart}
          >
            <Text style={styles.startButtonText}>
              Let's start
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

DTestStartView.contextTypes = {
  openDrawer: React.PropTypes.func
};

