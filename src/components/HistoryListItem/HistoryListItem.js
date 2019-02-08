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

export class HistoryListItem extends Component {
  props: {
    date: Date,
    score: number,
    totalScore: number,
    isFirst: bool,
    type: number,
    selected: bool,
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

  // data processing
  getDateTimeString(date) {
    let dateWrapper = moment(date);
    let returnValues = {
      date: dateWrapper.format('MMM DD, YYYY'),
      time: dateWrapper.format('H:mm'),
      period: dateWrapper.format('A')
    };
    return returnValues;
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

  getStyleFromType(type) {
    let color = DColors.lightGray;
    if (type === 1) {
      color = DColors.graphGreen;
    } else if (type === -1) {
      color = DColors.graphRed;
    }

    return {color: color};
  }


  render() {
    const { date, score, totalScore, isFirst, type, selected} = this.props;
    const dateValues = this.getDateTimeString(date);
    let selectedTextStyle = selected ? styles.selectedText : {};
    let iconName = type === 0 ? 'minus' : type === 1 ? 'caret-down' : 'caret-up';
    let iconStyle = type === 1 ? styles.itemiconDown : type === 0 ? styles.itemiconMinus : {};

    return (
      <View style={[styles.listItemContainer, isFirst === true ? styles.firstItem : {}, selected ? styles.listItemContSelected : {}]}>
        <TouchableOpacity 
          style={styles.itemButton}
          onPress={() => this.onPressItem()}
        >
          <Text style={[styles.dateString, selectedTextStyle]}>
            {dateValues.date}
          </Text>
          <View style={styles.timeCont}>
            <Text style={[styles.timeValue, selectedTextStyle]}>
              {dateValues.time}
            </Text>
            <Text style={[styles.timePeriod, selectedTextStyle]}>
              {dateValues.period}
            </Text>
          </View>
          <View style={styles.statusView}>
            <Text style={[styles.scoreView, selectedTextStyle]}>
              <Text style={[styles.scoreText, this.getStyleFromScore(score), selectedTextStyle]}>{score}</Text> / {totalScore}
            </Text>
            <View style={styles.iconCont}>
              <View style={[styles.iconView, selected === true ? styles.selectedIcon : {}]}>
                {
                  selected === false ? 
                    (
                      <Icon name={iconName} size={12} style={[styles.itemIcon, iconStyle, this.getStyleFromType(type), selectedTextStyle]} />
                    ):
                    (
                      <IonIcon name={"ios-more"} size={20} style={[styles.itemIcon, selectedTextStyle]} />
                    )
                }
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

HistoryListItem.propTypes = {
  date: PropTypes.any,
  isFirst: PropTypes.bool,
  score: PropTypes.number,
  totalScore: PropTypes.number,
  type: PropTypes.number,
  selected: PropTypes.bool
};

HistoryListItem.defaultProps = {
  date: new Date(),
  score: 12,
  selected: false,
  totalScore: 27,
  type: 0,
  isFirst: false,
};