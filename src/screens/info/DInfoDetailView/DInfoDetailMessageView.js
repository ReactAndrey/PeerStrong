
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


export class DInfoDetailMessageView extends Component {
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
        centerLabel='Message'
        color={DColors.midGray}
        leftLabel=' '
        leftIconColor={DColors.lightGreen}
        leftIcon='ios-arrow-back'
        leftAction={this.onLeftBack}
        backgroundColor={'white'}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel='Message'
          sideWidth={40}
          leftLabel=' '
          leftIcon='ios-arrow-back'
          leftAction={this.onLeftBack}
          leftIconColor={DColors.lightGreen}
          backgroundColor={'white'}
          color={DColors.midGray}
        />
      );
    }
    return (
      <View style={styles.container}>
        {topNav}
        <View style={styles.content}>
          <ScrollView
            automaticallyAdjustContentInsets={false}
            style={styles.listView}
          >
            <Text style={styles.desc}>
              Hello there, {"\n"}{"\n"}
              Thanks for downloading Depression Test. 
              {"\n"}{"\n"}
              Depression is a pervasive, global illness. According WHO's 2012 Depression Fact Sheet, an estimated 350 million people of all ages suffer from depression worldwide. Depression is different from occasional mood swings and emotional responses to everyday life challenges. It is a serious health condition and a long-lasting, severe episode’s effects on an individual can be devastating.  
              {"\n"}{"\n"}
              Although depression can be effectively treated, only a small minority of affected people actually receive such treatments. More often than not, the social stigma associated with mental disorders would keep an affected person from seeking professional help.
              {"\n"}{"\n"}
              We developed this application to help those who may be suffering from depression to assess their conditions in privacy and hopefully feel empowered to take whatever action necessary.
              {"\n"}{"\n"}
              Please feel free to reach out to us to let us know how you like the app and what we can do to make it help you better.  {"\n"}{"\n"}take care, {"\n"}Baris
            </Text>
          </ScrollView>
        </View>

      </View>
    );
  }
}

DInfoDetailMessageView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func
};

