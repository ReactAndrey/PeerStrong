
'use strict';
import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  ScrollView,
  StatusBar,
  Platform,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';
// External Libraries
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
// User Customized
var DColors = require('DColors');
import { Text } from 'DText';
import { 
  getImageFromName,
  getResultTextFromScore,
  getLatestFromArray,
  calcScore,
  getDateTimeString
} from 'DUtils';
import {
  TopNavBar,
  ProgressView
} from 'AppComponents';

// Styles
import { styles } from './styles';


class DResultMainView extends Component {
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
    const { history } = this.props;
    console.log("History=", history);
    let latestResult = getLatestFromArray(history);
    if (latestResult === undefined) {
      latestResult = {
        date: new Date(),
        scores: []
      };
    }
    // const latestResult = this.props.latestHistory();
    let topNav = (
      <TopNavBar
        centerLabel='Your Results'
        bottomColor={DColors.lightGreen}
        color={'white'}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel='Your Results'
          sideWidth={40}
          leftLabel=' '
          leftIcon='md-menu'
          leftAction={this.onLeftNavAction}
          color={'white'} 
          leftIconColor={'white'}
          bottomColor={DColors.lightGreen}
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
          <View style={styles.topStatusBar}>
            <View style={styles.leftDateContainer}>
              <Icon name="clock-o" size={22} style={styles.clockIcon} />
              <View style={styles.dateCont}>
                <Text style={styles.dateText}>
                  {getDateTimeString(latestResult.date).date}
                </Text>
                <Text style={styles.timeText}>
                  {getDateTimeString(latestResult.date).time + " " + getDateTimeString(latestResult.date).period}
                </Text>
              </View>
            </View>
            {
              // (
              //   <View style={styles.rightLocContainer}>
              //     <View style={styles.dateCont}>
              //       <Text style={styles.dateText}>
              //         Williamsburg
              //       </Text>
              //       <Text style={styles.timeText}>
              //         Brookyln, NY
              //       </Text>
              //     </View>
              //     <Icon name="map-marker" size={18} style={styles.clockIcon} />
              //   </View>
              // )
            }
          </View>

          <View style={styles.scoreProgressView}>
            <View style={styles.scoreView}>
              <Text style={styles.scoreText}>
                <Text style={[styles.scoreText, styles.scoreBold]}>
                  {calcScore(latestResult.scores) === -1 ? 0 : calcScore(latestResult.scores)}
                </Text>
                /27
              </Text>
            </View>
            <View style={styles.progressView}>
              <ProgressView 
                style={styles.progressBar} 
                totalScore={27}
                score={calcScore(latestResult.scores) === -1 ? 0 : calcScore(latestResult.scores)}
                numSegments={27}
              />
            </View>
          </View>

          <View style={styles.meaningView}>
            {
              calcScore(latestResult.scores) !== -1 && (
                <Text style={styles.title}>
                  {getResultTextFromScore(calcScore(latestResult.scores)).title}
                </Text>
              ) 
            }
            <Text style={styles.desc}>
              {getResultTextFromScore(calcScore(latestResult.scores)).desc}
            </Text>
          </View>
          {
            false && (
            <View style={styles.buttonArea}>
              <TouchableOpacity
                style={styles.btnFind}
                onPress={this.onPressFind}
              >
                <Text style={styles.txtBtnFind}>
                  Find a Doctor
                </Text>
              </TouchableOpacity>
            </View>  
            )
          }

          
        </View>
      </View>
    );
  }
}


DResultMainView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func,
  openDrawer: React.PropTypes.func
};

function select(store) {
  return {
    questions: store.questions,
    history: store.history
  };
}

module.exports = connect(select)(DResultMainView);
