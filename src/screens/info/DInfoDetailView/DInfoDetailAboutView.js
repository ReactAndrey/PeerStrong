
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


export class DInfoDetailAboutView extends Component {
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
  }

  onLeftBack = () => {
    if (this.props.navigator) {
      this.props.navigator.pop();
    }
  }

  onPressTakeStart = () => {
    this.context.onMoveToSurvey();
  }

  // Render
  render() {
    let topNav = (
      <TopNavBar
        centerLabel='About'
        leftLabel=' '
        leftIcon='ios-arrow-back'
        leftAction={this.onLeftBack}
        backgroundColor="white"
        color={DColors.midGray}
      />);
    if (Platform.OS.toLowerCase() != 'ios') {
      topNav = (
        <TopNavBar
          centerLabel='About'
          sideWidth={40}
          leftLabel=' '
          leftIcon='ios-arrow-back'
          backgroundColor="white"
          leftAction={this.onLeftBack}
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
            <View style={[styles.titleContainer, styles.firstTitle]}>
              <Text style={styles.title}>
                About PHQ-9 
              </Text>
            </View>
            <Text style={styles.desc}>
              The PHQ-9 is the nine item depression scale of the Patient Health Questionnaire*. It can be a powerful tool to assist clinicians with diagnosing depression and monitoring treatment response. The nine items of the PHQ-9 are based directly on the nine diagnostic criteria for major depressive disorder in the DSM-IV (Diagnostic and Statistical Manual Fourth Edition). This can help track a patient's overall depression severity as well as the specific symptoms that are improving or not with treatment. 
            </Text>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Advantages of the PHQ-9 
              </Text>
            </View>
            <View style={styles.advList}>
              <View style={styles.advCont}>
                <Icon name="circle" size={7} style={styles.advIcon} />
                <Text style={styles.advText}>
                  Shorter than other depression rating scales,
                </Text>
              </View>

              <View style={styles.advCont}>
                <Icon name="circle" size={7} style={styles.advIcon} />
                <Text style={styles.advText}>
                  Can be administered in person, by telephone, or self-administered, 
                </Text>
              </View>

              <View style={styles.advCont}>
                <Icon name="circle" size={7} style={styles.advIcon} />
                <Text style={styles.advText}>
                  Facilitates diagnosis of major depression, 
                </Text>
              </View>

              <View style={styles.advCont}>
                <Icon name="circle" size={7} style={styles.advIcon} />
                <Text style={styles.advText}>
                  Provides assessment of symptom severity, 
                </Text>
              </View>

              <View style={styles.advCont}>
                <Icon name="circle" size={7} style={styles.advIcon} />
                <Text style={styles.advText}>
                  Proven effective in a geriatric population,(Löewe B, et al, 2004 Medical Care)
                </Text>
              </View>

              <View style={styles.advCont}>
                <Icon name="circle" size={7} style={styles.advIcon} />
                <Text style={styles.advText}>
                  Well validated and documented in a variety of populations
                </Text>
              </View>


            </View>
          </ScrollView>
        </View>

      </View>
    );
  }
}

DInfoDetailAboutView.contextTypes = {
  onMoveToSurvey: React.PropTypes.func
};

