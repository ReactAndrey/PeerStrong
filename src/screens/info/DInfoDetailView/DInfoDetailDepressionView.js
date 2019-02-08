
'use strict';
import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  ScrollView,
  Platform,
  Image,
  Navigator,
  Linking,
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
  ListItem
} from 'AppComponents';

// Styles
import { styles } from './styles';


export class DInfoDetailDepressionView extends Component {
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

  onPressItem = (index) => {
    const { navigator } = this.props;
    const hyperLinks = [
      "http://www.mentalhealthamerica.net/go/depression",
      "http://www.mayoclinic.com/health/dealing-with-depression/MY01774",
      "http://www.webmd.com/depression/default.htm",
      "http://www.nimh.nih.gov/health/topics/depression/index.shtml",
      "http://www.nami.org/Template.cfm?Section=depression",
      // "http://www.apa.org/topics/depress/",
      "http://www.adaa.org/understanding-anxiety/depression",
      // "http://www.psychiatry.org/depression",
      "http://www.psychologytoday.com/basics/depression",
      "http://www.who.int/topics/depression/en/"
    ];
    let url = hyperLinks[index];
    
    if (url !== "") {
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.log('Can\'t handle url: ' + url);
        } else {        
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
    }


    
  };

  // Render
  render() {
    let topNav = (
      <TopNavBar
        centerLabel='Depression Sources'
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
          centerLabel='Depression Sources'
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
            ref={(scrollView) => { this._scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            style={styles.listView}
          >
            <ListItem 
              isFirst={true}
              title={"Mental Health America"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(0)}
            />
            <ListItem 
              title={"Mayo Clinic"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(1)}
            />
            <ListItem 
              title={"WebMD"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(2)}
            />
            <ListItem 
              title={"National Institute of Mental Health"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(3)}
            />
            <ListItem 
              title={"National Alliance on Mental Illness"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(4)}
            />
            <ListItem 
              title={"Anxiety and Depression Association of America"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(5)}
            />
            <ListItem 
              title={"Psychology Today"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(6)}
            />
            <ListItem 
              title={"World Health Organization"} 
              style={styles.listItem}
              onPressItem={() => this.onPressItem(7)}
            />


          </ScrollView>
        </View>

      </View>
    );
  }
}

DInfoDetailDepressionView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func
};

