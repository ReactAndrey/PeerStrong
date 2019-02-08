
'use strict';
import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  ScrollView,
  Platform,
  Dimensions,
  StatusBar,
  Image,
  Navigator
} from 'react-native';
// External Libs
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

// Styles
let DColors = require('DColors');
import { styles } from './styles';
import { Text } from 'DText';
let { width, height } = Dimensions.get('window');
import type {Tab} from '../../../reducers/navigation';
// Custom
import {
  DCheckBox,
  TopNavBar
} from 'AppComponents';
import {
  answerQuestion,
  switchTab
} from 'AppActions';

class DTestSurveyView extends Component {
  props: {
    navigator: Navigator;
    switchTab: (tab: Tab) => void;
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      checkMarks: [],
      currentPage: 0,
      isEnableScroll: false
    };
    const { questions } = this.props;
    let marks = [];
    for(let i = 0; i < questions.length; i++) {
      marks[i] = -1;
    }
    this.state.checkMarks = marks;
  }

  componentDidReceiveProps(nextProps: Props) {
    const { questions } = nextProps.questions;
    let marks = [];
    for(let i = 0; i < questions.length; i++) {
      marks[i] = -1;
    }
    this.setState({checkMarks: marks});
  }

  // Swiper accessories
  getSwiperDot = () => {
    return (
      <View style={styles.dotStyle} />
    )
  }

  getSwiperActiveDot = () => {
    return (
      <View style={styles.activeDotStyle} />
    )
  }

  onChecked = (index, value, isChecked) => {
    let values = [...this.state.checkMarks];
    const { currentPage } = this.state;
    if (isChecked === true) {
      values[index] = value;
    }
    // debugger;
    if (values[currentPage] !== -1) {
      this.setState({isEnableScroll: true});
    }
    this.setState({checkMarks: values});
  }

  onMomentumScrollEnd = (e, state, context) => {
    this.setState({currentPage: state.index});
    const { questions } = this.props;
    // console.log("Values=", this.state.checkMarks);
    // console.log("index=", state.index);
    this.setState({isEnableScroll: false});
  }

  onScrollBeginDrag = (e, state, context) => {
    const { checkMarks } = this.state;
    console.log("Begin drag index=", state.index);
    if (state.index === 8 && checkMarks[state.index] !== -1) {
      if (checkMarks[state.index] !== 0) {
        this.props.answerQuestion(new Date(), checkMarks);
        this.props.navigator.push({end: {}});
      } else {
        this.props.answerQuestion(new Date(), checkMarks);
        this.props.switchTab('results');
        // End move to the tab
        if (this.context.onMoveToTab) {
          this.context.onMoveToTab();
        }
      }
    }
    

  }

  // Actions

  // Render
  render() {
    const { questions } = this.props;
    const { checkMarks, isEnableScroll, currentPage } = this.state;
    let topNav = (
      <TopNavBar
        centerLabel={'Question '}
        currentPage={currentPage + 1}
        bottomColor={'rgba(0, 0, 0, 0.2)'}
        color={DColors.midGray}
        backgroundColor={'white'}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel={'Question '}
          currentPage={currentPage + 1}
          sideWidth={40}
          leftLabel=' '
          leftIcon='md-menu'
          leftAction={this.onLeftNavAction}
          color={DColors.midGray}
          bottomColor={'rgba(0, 0, 0, 0.2)'}
          backgroundColor={'white'}
        />
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        {topNav}
        <View style={styles.content}>
        {
          questions && 
          (          
            <Swiper 
              style={styles.wrapper}
              height={height - 20 - 50 - 42}  // You have to set this here, not in Styles, Critical
              paginationStyle={styles.paginationStyle}
              loop={true}
              scrollEnabled={isEnableScroll}
              dot={this.getSwiperDot()}
              activeDot={this.getSwiperActiveDot()}
              onMomentumScrollEnd ={this.onMomentumScrollEnd}
              onScrollBeginDrag={this.onScrollBeginDrag}
            >
              {
                questions.map((question, index) => {
                  let strLen = question.question.length;
                  const textWidth = width * 3 / 4;
                  const textHeight = height / 3 - height / 10;
                  const fontSize = Math.sqrt(textWidth * textHeight / strLen * 8 / 5);
                  return (
                    <View style={styles.swipeContentView} key={question.id}>
                      <View style={styles.swipeContent}>
                        <View style={styles.titleContainer}>
                          <Text style={[styles.title, {fontSize: fontSize > 40 ? 40 : fontSize}]}>
                            {question.question}
                          </Text>
                        </View>
                        <View style={styles.answerContainer}>
                          <DCheckBox 
                            label='Not at all'
                            style={styles.checkboxItem}
                            selected={checkMarks[index] === 0 ? true : false}
                            isInit={checkMarks[index] === -1 ? true : false}
                            onChecked={(isChecked) => this.onChecked(index, 0, isChecked)}
                          />
                          <DCheckBox 
                            label='Several days'
                            style={styles.checkboxItem}
                            selected={checkMarks[index] === 1 ? true : false}
                            isInit={checkMarks[index] === -1 ? true : false}
                            onChecked={(isChecked) => this.onChecked(index, 1, isChecked)}
                          />
                          <DCheckBox 
                            label='More than half the days'
                            style={styles.checkboxItem}
                            selected={checkMarks[index] === 2 ? true : false}
                            isInit={checkMarks[index] === -1 ? true : false}
                            onChecked={(isChecked) => this.onChecked(index, 2, isChecked)}
                          />
                          <DCheckBox 
                            label='Nearly every day'
                            style={styles.checkboxItem}
                            selected={checkMarks[index] === 3 ? true : false}
                            isInit={checkMarks[index] === -1 ? true : false}
                            onChecked={(isChecked) => this.onChecked(index, 3, isChecked)}
                          />
                        </View>
                      </View>
                    </View>
                  )
                })
              }
            </Swiper>
          )
        }
          <Text style={styles.bottomDesc}>
            SWIPE TO NEXT QUESTION
          </Text>
        </View>
      </View>
    );
  }
}

DTestSurveyView.contextTypes = {
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
    answerQuestion: (date, values) => dispatch(answerQuestion(date, values)),
    switchTab: (tab) => dispatch(switchTab(tab)),
  };
}

export default connect(select, actions)(DTestSurveyView);
