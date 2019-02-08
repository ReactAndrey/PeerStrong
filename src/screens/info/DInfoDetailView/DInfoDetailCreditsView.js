
'use strict';
import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  ScrollView,
  Platform,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';
// External Libraries
import Icon from 'react-native-vector-icons/FontAwesome';

// User Customized
var DColors = require('DColors');
import { Text } from 'DText';
import { getImageFromName } from 'DUtils';
import {
  TopNavBar,
} from 'AppComponents';

// Styles
import { styles } from './styles';


export class DInfoDetailCreditsView extends Component {
  props: {
    navigator: Navigator;
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    
  }

  // Actions
  onLeftNavAction = () => {
    this.context.openDrawer();
  };

  onLeftBack = () => {
    if (this.props.navigator) {
      this.props.navigator.pop();
    }
  };

  onPressTakeStart = () => {
    this.context.onMoveToSurvey();
  };

  // Render
  render() {
    let topNav = (
      <TopNavBar
        centerLabel='Credits'
        leftLabel=' '
        leftIcon='ios-arrow-back'
        leftAction={this.onLeftBack}
        backgroundColor="white"
        color={DColors.midGray}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel='Credits'
          sideWidth={40}
          leftLabel=' '
          leftIcon='ios-arrow-back'
          leftAction={this.onLeftBack}
          backgroundColor="white"
          color={DColors.midGray}
        />
      );
    }
    return (
      <View style={styles.container}>
        {topNav}
        <View style={styles.content}>
          <View style={styles.profileCont}>
            <View style={styles.photoImageCont}>
              <Image 
                source={getImageFromName('produced')}
                style={styles.photo}
                resizeMode={'contain'}
              />
            </View>
            <Text style={styles.jobPosition}>
              Produced by
            </Text>
            <Text style={styles.name}>
              Baris Sarer
            </Text>
          </View>
          <View style={styles.profileCont}>
            <View style={styles.photoImageCont}>
              <Image 
                source={getImageFromName('coded')}
                style={styles.photo}
                resizeMode={'contain'}
              />
            </View>
            <Text style={styles.jobPosition}>
              Coded by
            </Text>
            <Text style={styles.name}>
              Alexandru Petrescu
            </Text>
          </View>
          <View style={styles.profileCont}>
            <View style={styles.photoImageCont}>
              <Image 
                source={getImageFromName('design')}
                style={styles.photo}
                resizeMode={'contain'}
              />
            </View>
            <Text style={styles.jobPosition}>
              Designed by
            </Text>
            <Text style={styles.name}>
              Bulent Shik
            </Text>
          </View>
        </View>

      </View>
    );
  }
}

// <View style={styles.profileCont}>
  // <Text style={styles.designText}>
    // Designed by
  // </Text>
  // <View style={styles.logoImageContainer}>
    // <Image 
      // source={getImageFromName('infoLogo')}
      // style={styles.logoImage}
      // resizeMode={'contain'}
    // />
  // </View>
// </View>

DInfoDetailCreditsView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func
};

