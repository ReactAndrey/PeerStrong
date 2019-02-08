'use strict';
import React, { Component, PropTypes } from 'react';
import {
  View,
  Platform,
  Image,
  Navigator,
  StatusBar,
  TouchableOpacity
} from 'react-native';
// External Libraries
import Icon from 'react-native-vector-icons/FontAwesome';
import Autolink from 'react-native-autolink';

// User Customized
var DColors = require('DColors');
import { Text } from 'DText';
import { getImageFromName } from 'DUtils';
import {
  TopNavBar,
} from 'AppComponents';

// Styles
import { styles } from './styles';

export class ListItem extends Component {
  props: {
    title: String,
    isFirst: bool,
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

  render() {
    const { title, isFirst } = this.props;
    return (
      <View style={[styles.listItemContainer, isFirst === true ? styles.firstItem : {}]}>
        <TouchableOpacity 
          style={styles.itemButton}
          onPress={() => this.onPressItem()}
        >
          <Text 
            style={styles.itemTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <Icon name="chevron-right" size={14} style={styles.itemIcon} />
        </TouchableOpacity>

      </View>
    );
  }
};

// <View style={styles.itemRightIndent} />

ListItem.propTypes = {
  title: PropTypes.string,
  isFirst: PropTypes.bool,
};

ListItem.defaultProps = {
  title: 'About PHQ-9',
  isFirst: false
};