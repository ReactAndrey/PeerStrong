'use strict';
import React, { Component, PropTypes } from 'react';
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
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
// Customized
import { Text } from 'DText';

// Styles
import { styles } from './styles';
var DColors = require('DColors');

export class HistoryQuestionItem extends Component {
  props: {
    title: string,
    score: number,
    type: string,
    onPressItem: any
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  // actions
  onPressItem() {
    if (this.props.onPressItem) {
      this.props.onPressItem();
    }
  }

  getStyleFromScore(score) {
    let color = '#f4f4e2';
    if (score < 5) 
      color = DColors.graphGreen;
    else if (score < 10) 
      color = DColors.graphYellow;
    else if (score < 20) 
      color = DColors.graphOrange;
    else
      color = DColors.graphRed;

    return {color: color};
  }

  getScoreTextFromScore(score) {
    let scoreText = "Not at all";
    if (score === 1) {
      scoreText = "Several days";
    } else if (score === 2) {
      scoreText = "More than half the days";
    } else if (score === 3) {
      scoreText = "Nearly every day";
    }
    return scoreText;
  }

  getStyleFromType(type) {
    let color = '#c9c9c9';
    if (type === 1) {
      color = DColors.graphGreen;
    } else if (type === -1) {
      color = DColors.graphRed;
    }

    return {color: color};
  }


  render() {
    const { title, score, type } = this.props;
    let iconName = type === 0 ? 'minus' : type === 1 ? 'caret-down' : 'caret-up';
    let iconStyle = type === 1 ? styles.itemiconDown : type === 0 ? styles.itemiconMinus : {};
    return (
      <View style={styles.listItemContainer}>
        <Text 
          style={styles.itemTitle}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {title}
        </Text>
        <View style={styles.itemScores}>
          <View style={[styles.iconView]}>
            {
                (
                  <Icon name={iconName} size={13} style={[styles.itemIcon, iconStyle, this.getStyleFromType(type)]} />
                )
            }
          </View>
          <Text style={styles.scoreText}>
            {this.getScoreTextFromScore(score)}
          </Text>
        </View>
      </View>
    )
    
  }
};

HistoryQuestionItem.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number,
  type: PropTypes.number
};

HistoryQuestionItem.defaultProps = {
  title: "Little interest or pleasure in doing things?",
  score: 0, // 0 - 3
  type: 0,
};