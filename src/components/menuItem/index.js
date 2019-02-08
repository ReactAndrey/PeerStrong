'use strict';
import React, { Component } from 'react';
import { 
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Platform,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';
var DColors = require('DColors');
import { Text } from 'DText';
// var StyleSheet = require('DStyleSheet');
export class MenuItem extends Component {
  props: {
    icon: number;
    selectedIcon: number;
    selected: boolean;
    title: string;
    badge: ?string;
    onPress: () => void;
  };

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    var icon = this.props.selected ? this.props.selectedIcon : this.props.icon;
    var selectedTitleStyle = this.props.selected && styles.selectedTitle;
    return (
      <TouchableNativeFeedback 
        onPress={this.props.onPress}
        style={this.props.style}
      >
        <View style={styles.container}>
          <Image 
            style={styles.icon} 
            source={icon} 
            resizeMode={'contain'}
          />
          <Text style={[styles.title, selectedTitleStyle]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    paddingLeft: 30
  },
  icon: {
    marginRight: 15,
    height: 30,
    width: 30
  },
  title: {
    flex: 1,
    fontSize: 17,
    color: '#666666',
  },
  selectedTitle: {
    color: DColors.lightGreen,
  },
  badge: {
    backgroundColor: '#DC3883',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    color: 'white',
  }
});
