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
import { styles } from './styles';
import { LocalImageList } from 'DUtils';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export class DButton extends Component {
  props: {
    style: any,
    label: string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };

    this.onPressButton = this.onPressButton.bind(this);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps: Props) {
    
  }

  // Actions
  onPressButton() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  // Render
  render() {
    const { title, titleStyle } = this.props;
    return (
      <TouchableOpacity 
        style={[this.props.style, styles.buttonContainer]}
        onPress={this.onPressButton}
      >
        <Text style={[styles.title, titleStyle]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  
}

DButton.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.any,
};

DButton.defaultProps = {
  title: '',
  titleStyle: {color: 'black'}
};
