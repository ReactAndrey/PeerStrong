
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
  StatusBar,
  TouchableOpacity
} from 'react-native';
// External Libraries
import Icon from 'react-native-vector-icons/FontAwesome';
import Autolink from 'react-native-autolink';
import moment from 'moment';
var { width, height } = Dimensions.get('window');
import { connect } from 'react-redux';
// User Customized
var DColors = require('DColors');
import { Text } from 'DText';
import { 
  getImageFromName, 
  getTopTenFromArray 
} from 'DUtils';
import {
  TopNavBar,
  HistoryListItem,
  HistoryQuestionItem,
  DChart
} from 'AppComponents';

// Styles
import { styles } from './styles';

class DHistoryMainView extends Component {
  props: {
    navigator: Navigator;
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      itemsVisible: []
    };
    if (this.props.history) {
      this.props.history.map((data, index) => {
        this.state.itemsVisible[index] = false;
      })
    }
    this._scrollView = undefined;
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

  onPressItem = (index) => {
    let visibles = [...this.state.itemsVisible];
    visibles[index] = !visibles[index];
    this.setState({itemsVisible: visibles});
  }

  // Render
  renderListItem(data, dataIndex, score_changed) {
    const { questions } = this.props;
    const { itemsVisible } = this.state;
    let scoreSum = 0;
    data.scores.map((score, index) => {scoreSum+=score});
    return (
      <View key={'historyItem' + dataIndex}>
        <HistoryListItem
          isFirst={true}
          type={score_changed.type}
          date={data.date}
          score={scoreSum}
          selected={itemsVisible[dataIndex]}
          style={styles.listItem}
          onPressItem={() => this.onPressItem(dataIndex)}
        />
        {
          itemsVisible[dataIndex] === true &&
          data.scores.map((score, index) => {
            return (
              <HistoryQuestionItem 
                score={score}
                type={score_changed.subChanges[index]}
                key={"history_question" + index}
                title={questions[index].question}
              />
            );
          })
        }
      </View>
    )
  }

  render() {
    const { history } = this.props;
    console.log("History=", history);
    let topNav = (
      <TopNavBar
        centerLabel='History'
        color={DColors.midGray}
        backgroundColor={'white'}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel='History'
          sideWidth={40}
          leftLabel=' '
          leftIcon='md-menu'
          leftAction={this.onLeftNavAction}
          color={DColors.midGray}
          leftIconColor={DColors.darkGray}
          backgroundColor={'white'}
        />
      );
    }
    // const scores = [1, 11, 12, 20, 5, 18, 9, 20, 2, 6];
    let historyTopTen = getTopTenFromArray(history);
    let scores = historyTopTen.map((data, index) => { 
      let sum = 0;
      data.scores.map((score, data) => {sum = sum + score});
      return sum;
    });
    let prevIndex = historyTopTen.length > 1 ? 1 : 0;
    let scores_changed = historyTopTen.map((data, index) => {
      let changed = {
        type: 0,
        subChanges: []
      };
      let prev_data = historyTopTen[prevIndex];
      if (prev_data !== undefined) {
        if (scores[prevIndex] > scores[index]) {
          changed.type = 1;
        } else if (scores[prevIndex] < scores[index]) {
          changed.type = -1;
        } else {
          changed.type = 0;
        }

        for (let j = 0; j < data.scores.length; j++) {
          let sub_change = 0;
          if (prev_data.scores[j] > data.scores[j]) {
            sub_change = 1;
          } else if (prev_data.scores[j] < data.scores[j]) {
            sub_change = -1;
          } else {
            sub_change = 0;
          }
          changed.subChanges.push(sub_change);
        }
      }
      prevIndex = prevIndex + 1;
      
      return changed;
    });

    let scoresForChart = [...scores].reverse();
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        {topNav}
        <View style={styles.content}>
          <DChart 
            viewHeight={150}
            scores={scoresForChart}
          />
          <ScrollView
            ref={(scrollView) => { this._scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            style={styles.listView}
          >
          {
            historyTopTen.map((data, index) => {
              return this.renderListItem(data, index, scores_changed[index])
            })
          }
          </ScrollView>
        </View>

      </View>
    );
  }
}

DHistoryMainView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func,
  openDrawer: React.PropTypes.func
};

function select(store) {
  return {
    questions: store.questions,
    history: store.history
  };
}

export default connect(select)(DHistoryMainView);
