
'use strict';
import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  ScrollView,
  Platform,
  Image,
  Dimensions,
  Navigator,
  TouchableOpacity
} from 'react-native';
// External Libraries
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
// User Customized
var DColors = require('DColors');
import { Text } from 'DText';
import { getImageFromName } from 'DUtils';
import {
  TopNavBar,
} from 'AppComponents';

var { width, height } = Dimensions.get('window');
import {
  answerQuestion,
  switchTab
} from 'AppActions';

// Styles
import { styles } from './styles';


class DTestEndView extends Component {
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
    // goto tab view
    this.props.switchTab('results');
    // End move to the tab
    if (this.context.onMoveToTab) {
      this.context.onMoveToTab();
    }
  }

  // Render
  render() {
    let strLen = 160;
    const textWidth = width * 3 / 4;
    const textHeight = height / 2 - height / 8 - 50;
    let fontSize = Math.sqrt(textWidth * textHeight / strLen * 8 / 5);
    let boldDesc = [styles.boldDesc, {fontSize: fontSize}];
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.manualContainer}>
            <Icon name="exclamation-triangle" size={fontSize * 1.5} style={styles.alertIcon} />
            <Text style={[styles.descText, {fontSize: fontSize}]}>
              If you've had thoughts of self-harming or are{'\n'}<Text style={boldDesc}>feeling suicidal</Text>
              , contact <Text style={boldDesc}>someone immediately </Text> such as your <Text style={boldDesc}>doctor</Text>, a <Text style={boldDesc}>friend</Text>
              , a relative or someone <Text style={boldDesc}>you can trust.</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={this.onPressStart}
          >
            <Text style={styles.startButtonText}>
              OK
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

DTestEndView.contextTypes = {
  openDrawer: React.PropTypes.func,
  onMoveToTab: React.PropTypes.func
};

function select(store) {
  return {
    questions: store.questions
  };
}

function actions(dispatch) {
  return {
    switchTab: (tab) => dispatch(switchTab(tab)),
  };
}

export default connect(select, actions)(DTestEndView);

