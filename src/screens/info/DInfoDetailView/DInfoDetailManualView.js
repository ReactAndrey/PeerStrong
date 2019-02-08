
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


export class DInfoDetailManualView extends Component {
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
  };

  onLeftBack = () => {
    if (this.props.navigator) {
      this.props.navigator.pop();
    }
  };

  onPressTakeStart = () => {
    this.context.onMoveToSurvey();
  };

  // Render
  render() {
    let topNav = (
      <TopNavBar
        centerLabel='How to use this app'
        leftLabel=' '
        leftIcon='ios-arrow-back'
        leftAction={this.onLeftBack}
        backgroundColor="white"
        color={DColors.midGray}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel='How to use this app'
          sideWidth={40}
          leftLabel=' '
          leftIcon='ios-arrow-back'
          leftAction={this.onLeftBack}
          backgroundColor="white"
          color={DColors.midGray}
        />
      );
    }
    return (
      <View style={styles.container}>
        {topNav}
        <View style={styles.content}>
          <ScrollView
            automaticallyAdjustContentInsets={false}
            style={[styles.listView, styles.manualList]}
          >
            <View style={[styles.manualListItem, styles.isFirstItem]}>
              <Text style={[styles.title, styles.manualTitle]}>
                Start
              </Text>
              <Text style={[styles.desc, styles.manualDesc]}>
                Click&nbsp;<Text style={styles.boldDesc}>"The Test"</Text>&nbsp;button to start taking the test. Once started, you have to answer all of the questions to complete the test.
                {"\n"}
                <Text style={styles.underlineDesc}>You cannot skip any questions.</Text>
              </Text>
            </View>

            <View style={styles.manualListItem}>
              <Text style={[styles.title, styles.manualTitle]}>
                Questions
              </Text>
              <Text style={[styles.desc, styles.manualDesc]}>
                Answer the questions honestly and answer them all in one sitting.
              </Text>
            </View>

            <View style={styles.manualListItem}>
              <Text style={[styles.title, styles.manualTitle]}>
                Results
              </Text>
              <Text style={[styles.desc, styles.manualDesc]}>
                Your latest test result and the summary analysis of the results will show on the <Text style={styles.boldDesc}>"Results"</Text> screen.
              </Text>
            </View>

            <View style={styles.manualListItem}>
              <Text style={[styles.title, styles.manualTitle]}>
                History
              </Text>
              <Text style={[styles.desc, styles.manualDesc]}>
                History screen shows your historical test results. <Text style={styles.boldDesc}>The color coding on the graph is as follows:</Text>
              </Text>
              <View style={[styles.advList, styles.manualAdvList]}>
                <View style={styles.advCont}>
                  <View style={[styles.manualAdvIcon, styles.greenCircle]} />
                  <Text style={styles.manualAdvText}>
                    {"Green: <5"}
                  </Text>
                </View>
                <View style={styles.advCont}>
                  <View style={[styles.manualAdvIcon, styles.yellowCircle]} />
                  <Text style={styles.manualAdvText}>
                    Light orange: 5-10 (mild depression) 
                  </Text>
                </View>
                <View style={styles.advCont}>
                  <View style={[styles.manualAdvIcon, styles.orangeCircle]} />
                  <Text style={styles.manualAdvText}>
                    Dark orange: 10-20 (modestly severe depression) 
                  </Text>
                </View>
                <View style={styles.advCont}>
                  <View style={[styles.manualAdvIcon, styles.redCircle]} />
                  <Text style={styles.manualAdvText}>
                    Red: 20+ (severe depression) 
                  </Text>
                </View>
              </View>

            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

DInfoDetailManualView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func
};

