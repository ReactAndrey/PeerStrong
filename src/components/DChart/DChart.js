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
import Svg, { 
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg'
// Customized
import { Text } from 'DText';

// Styles
import { styles } from './styles';
var DColors = require('DColors');
var { width, height } = Dimensions.get('window');

export class DChart extends Component {
  props: {
    scores: any,
    viewHeight: number
  };

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  // actions
  onPressItem() {
    if (this.props.onPressItem) {
      this.props.onPressItem();
    }
  }

  // data processing

  // Render
  renderGrid() {
    const totalCount = 27;
    const { viewHeight } = this.props;
    let lineInfo = [];
    for(let i = 0; i < totalCount - 1 + 4; i++) {
      lineInfo.push({
        x1: 0,
        y1: viewHeight / (totalCount + 4) * (i + 1),
        x2: width,
        y2: viewHeight / (totalCount + 4) * (i + 1)
      })
    }

    return (
      <G fill="none">
        {
          lineInfo.map((data, index) => {
            let color = '#f4f4e2';
            const lineIndex = (totalCount - index) + 1;
            if (lineIndex === 0) color = DColors.lightGray;
            if (lineIndex === 5) color = DColors.graphGreen;
            if (lineIndex === 10) color = DColors.graphYellow;
            if (lineIndex === 20) color = DColors.graphOrange;
            if (lineIndex === 25) color = DColors.graphRed;
            return (
              <Line
              key={'grid'+index}
              stroke={color}
              strokeWidth='1'
              x1={data.x1}
              x2={data.x2}
              y1={data.y1}
              y2={data.y2} />
            )
          })
        }
      </G>
    );
  }

  renderDot(position, score) {
    const circleRadius = 4;
    let color = '#f4f4e2';
    let addedScore = score + 2; // because there is 2 lines at the first
    if (score < 5) 
      color = DColors.graphGreen;
    else if (score < 10) 
      color = DColors.graphYellow;
    else if (score < 20) 
      color = DColors.graphOrange;
    else
      color = DColors.graphRed;

    return (
      <G fill="none" key={'circledot' + position.x * position.y}>
        <Circle
          cx={position.x}
          cy={position.y}
          r={circleRadius}
          fill={'white'}
          stroke={color}
          strokeWidth={3}
        />
      </G>
    );
  }

  renderScores(scores) {
    const totalCount = 27;
    const dotCounts = scores.length;
    const { viewHeight } = this.props;
    const xPadding = width / dotCounts;
    const yPadding = viewHeight / (totalCount + 2 + 2);
    const startPadding = xPadding / 2;
    let positions = [];
    let paths = "";
    positions = scores.map((data, index) => {
      return {
        x: startPadding + index * xPadding,
        y: (totalCount - data + 2) * yPadding
      };
    });
    paths = paths + "M-4 " + (viewHeight + 4) + " ";
    paths = paths + "L" + (positions[0].x - xPadding / 2) + " " + (positions[0].y < 50 ? positions[0].y / 3 * 4 : positions[0].y / 3 * 2) + " ";
    scores.map((data, index) => {
      let position = positions[index];
      paths = paths + "L";
      paths = paths + position.x + " " + position.y + " ";
    });
    paths = paths + "L" + (positions[scores.length - 1].x + xPadding / 2) + " " + (positions[0].y < 50 ? positions[0].y / 3 * 4 : positions[0].y / 3 * 2) + " ";
    paths = paths + "L" + (width + 4) + " " + (viewHeight + 4) + " Z";
    return (
      <G fill="none">
        {
          positions.map((position, index) => {
            return (
              <G fill="none" key={'bar' + index}>
                <Line
                  stroke='#f4f4e2'
                  strokeWidth='1'
                  x1={position.x}
                  x2={position.x}
                  y1={0}
                  y2={viewHeight} 
                />
              </G>
            )
          })
        }
        <Path
            d={paths}
            fill="none"
            strokeWidth={2}
            stroke="#e0e0cc"
        />
        {
          positions.map((position, index) => {
            return this.renderDot(position, scores[index])
          })
        }
      </G>
    );
  }

  render() {
    const { scores, viewHeight } = this.props;
    return (
      <View style={[styles.chartView, {height: viewHeight}]}>
        <Svg style={{flex: 1, alignSelf: 'stretch'}} fill="#fffff5">
          {this.renderGrid()}
          {scores.length !== 0 && this.renderScores(scores)}
        </Svg>
      </View>
    );
  }
};

DChart.propTypes = {
  scores: PropTypes.any,
  viewHeight: PropTypes.number
};

DChart.defaultProps = {
  scores: [1, 11, 12, 20, 5, 18, 9, 20, 2, 6],
  viewHeight: 150
};