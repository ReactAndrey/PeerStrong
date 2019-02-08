'use strict';

import React, { Component, PropTypes } from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  View
} from 'react-native';

import { Text } from 'DText';
import { styles, segmentWidth, segmentHeight, progressHeight } from './styles';
import { LocalImageList } from 'DUtils';
export class ProgressView extends Component {
  props: {
    style: any,
    totalScore: any,
    score: any,
    numSegments: any
  };

  constructor(props) {
    super(props);
    this.state = {
      itemWidth: 0
    };
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps: Props) {
    
  }

  // Actions
  

  // Render
  renderSegments() {
    const { totalScore, score, numSegments } = this.props;
    const { itemWidth } = this.state;
    let array = [];
    for (let i = 0; i < numSegments - 1; i++) {
      array.push(i);
    }
    // return <View style={styles.tagView} />;
    const totalWidth = itemWidth - 32;
    const itemPadding = (totalWidth - segmentWidth) / (numSegments - 2) * numSegments / totalScore;

    const tagList = array.map((data, index) => {
      if (index === 4 || index === 9 || index === 19) {
        return (
          <View 
            style={[styles.tagView, {left: itemPadding * index}, styles.tagViewSelected]} 
            key={index}
          />
        );  
      }
    })
    return tagList;
  }

  // style={[styles.tagView, {marginRight: itemPadding}, (index + 1) < score * (numSegments) / totalScore ? styles.tagViewSelected : {} ]} 

  render() {
    const { totalScore, score, numSegments } = this.props;
    const { itemWidth } = this.state;
    
    const totalWidth = itemWidth - 32;
    const itemPadding = (totalWidth - segmentWidth) / (numSegments - 2) * numSegments / totalScore;
    let progressWidth = itemPadding * (score - 1)  + progressHeight / 2 + segmentWidth ;
    if (score === totalScore) {
      progressWidth = itemWidth;
    }
    if (score === 0) {
      progressWidth = 0;
    }

    return (
      <View 
        style={[this.props.style, styles.itemContainer]}
        onLayout={(event) => {
          this.setState({ itemWidth: event.nativeEvent.layout.width });
        }}
      >
        <View style={styles.itemBack}>
          <View style={[styles.itemProgress, {width: progressWidth}, score === totalScore ? styles.fullProgress : {}]}>
          </View>
        </View>
        <View style={[styles.tagViewContainer, {width: itemWidth ? itemWidth - 32 : 0}]}>
          {this.renderSegments()}
        </View>
      </View>
    );
  }
  
}

ProgressView.propTypes = {
  totalScore: PropTypes.number,
  score: PropTypes.number,
  numSegments: PropTypes.number
};

ProgressView.defaultProps = {
  totalScore: 27,
  score: 0,
  numSegments: 27
};
