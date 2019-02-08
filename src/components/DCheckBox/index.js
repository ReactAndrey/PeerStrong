'use strict';

import React, { Component, PropTypes } from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Platform,
  View
} from 'react-native';

import { Text } from 'DText';
var DColors = require('DColors');
import { styles } from './styles';
import { LocalImageList } from 'DUtils';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { CheckboxField, Checkbox } from 'react-native-checkbox-field';

export class DCheckBox extends Component {
  props: {
    style: any,
    label: string,
    selected: bool,
    isInit: bool,
    onChecked: () => void
  };

  constructor(props) {
    super(props);
    this.state = {
      isSelected: this.props.selected
    };
    this.selectCheckbox = this.selectCheckbox.bind(this);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({isSelected: nextProps.selected});
  }

  // Actions
  selectCheckbox() {
    const { isSelected } = this.state;
    // this.setState({ isSelected: !this.state.isSelected});
    if (this.props.onChecked) {
      this.props.onChecked(!isSelected);
    }
  }

  // Render
  render() {
    let iconSize = 18;
    if (Platform.OS.toLowerCase() != 'ios') {
      iconSize = 12;
    }
    const { isInit } = this.props;
    return (
      <View style={this.props.style}>
        <CheckboxField
          style={this.props.style}
          onSelect={this.selectCheckbox.bind(this)}
          selected={this.state.isSelected}
          defaultColor={'#fff'}
          selectedColor={DColors.lightGreen}
          labelStyle={(this.state.isSelected === true || this.props.isInit === true) ? styles.labelStyleSelected : styles.labelStyle}
          containerStyle={styles.containerStyle}
          checkboxStyle={this.state.isSelected ? styles.checkboxSelectedStyle : styles.checkboxStyle}
          label={this.props.label}
          labelSide={'right'}
        >
          <FontAwesomeIcon name="check" size={iconSize} style={styles.checkboxIcon}/>
        </CheckboxField>
      </View>
    );
  }
  
}

DCheckBox.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
  isInit: PropTypes.bool
};

DCheckBox.defaultProps = {
  label: '',
  selected: false,
  isInit: false
};
