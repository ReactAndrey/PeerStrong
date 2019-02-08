
'use strict';
import React, { Component, PropTypes } from 'react';
import {
  TabBarIOS,
  View,
  ScrollView,
  Platform,
  Image,
  Navigator,
  StatusBar,
  AlertIOS,
  TouchableOpacity
} from 'react-native';
// External Libraries
import Icon from 'react-native-vector-icons/FontAwesome';
import Autolink from 'react-native-autolink';
var Mailer = require('NativeModules').RNMail;
// User Customized
var DColors = require('DColors');
import { Text } from 'DText';
import { getImageFromName } from 'DUtils';
import {
  TopNavBar,
  ListItem
} from 'AppComponents';

// Styles
import { styles } from './styles';

export class DInfoMainView extends Component {
  props: {
    navigator: Navigator;
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
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
    const { navigator } = this.props;
    if (!navigator) {
      return;
    }
    switch(index) {
      case 0: 
        navigator.push({message: {}});
        break;
      case 1: 
        navigator.push({about: {}});
        break;
      case 2: 
        navigator.push({manual: {}});
        break;
      case 3: 
        navigator.push({credits: {}});
        break;
      case 4: 
        navigator.push({depression: {}});
        break;
      case 5: 
        Mailer.mail({
          subject: 'My feedback on Depression Test',
          recipients: ['bsarer@gmail.com'],
          ccRecipients: [],
          bccRecipients: [],
          body: ''
        }, (error, event) => {
            if(error) {
              AlertIOS.alert('Error', 'Could not send mail. Please send a mail to support@example.com');
            }
        });
        break;
    }
  }

  // Render
  render() {
    let topNav = (
      <TopNavBar
        centerLabel='Info'
        color={DColors.darkGray}
        backgroundColor={'white'}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel='Info'
          sideWidth={40}
          leftLabel=' '
          leftIcon='md-menu'
          leftAction={this.onLeftNavAction}
          color={DColors.darkGray}
          leftIconColor={DColors.darkGray}
          backgroundColor={'white'}
        />
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        {topNav}
        <View style={styles.content}>
          <ScrollView
            ref={(scrollView) => { this._scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            style={styles.listView}
          >
            <ListItem 
              isFirst={true}
              title={"Message from the developer"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(0)}
            />
            <ListItem 
              title={"About PHQ-9"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(1)}
            />
            <ListItem 
              title={"How to use this app?"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(2)}
            />
            <ListItem 
              title={"App Credits"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(3)}
            />
            <ListItem 
              title={"Depression sources"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(4)}
            />
            <ListItem 
              title={"Send feedback"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(5)}
            />

          </ScrollView>

        </View>

      </View>
    );
  }
}

// <View style={styles.memoView}>
  // <Text style={styles.textDesc}>
    // Please visit our website to find out more.
  // </Text>
  // <Autolink linkStyle={styles.linkText} text={"abc.com"} />
// </View>

DInfoMainView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func,
  openDrawer: React.PropTypes.func
};

