'use strict';

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  AsyncStorage,
  View
} from 'react-native';

import { Text } from 'DText';
import { styles } from './styles';
import Swiper from 'react-native-swiper';
var { width, height } = Dimensions.get('window');
import { 
  getImageFromName,
} from 'DUtils';
export class WelcomeMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      prevIndex: 0
    }
  }


  // Swiper accessories
  getSwiperDot = () => {
    return (
      <View style={styles.dotStyle} />
    )
  }

  getSwiperActiveDot = () => {
    return (
      <View style={styles.activeDotStyle} />
    )
  }

  onMomentumScrollEnd = (e, state, context) => {
    this.setState({currentPage: state.index});
    if (state.index === 0 && this.state.prevIndex === 3) {
      this.onPressSkip(); 
    }
  }

  onScrollBeginDrag = (e, state, context) => {
    
    this.setState({prevIndex: state.index})
  }

  // Actions
  onPressSkip = () => {
    // Goto MainView
    AsyncStorage.setItem('is_welcome_screen', "true");
    if (this.props.navigator) {
      this.props.navigator.push({main: {}});
    }
  }

  // Render
  render() {
    const { currentPage } = this.state;
    return (
      <View style={styles.container}>
        <Swiper 
            style={styles.wrapper}
            height={height / 6 * 5}  // You have to set this here, not in Styles, Critical
            paginationStyle={styles.paginationStyle}
            loop={false}
            dot={this.getSwiperDot()}
            activeDot={this.getSwiperActiveDot()}
            onMomentumScrollEnd ={this.onMomentumScrollEnd}
            onScrollBeginDrag = {this.onScrollBeginDrag}
          >
            <View style={styles.swipeContentView}>
              <View style={styles.swipeContent}>
                <View style={styles.logoViewContainer}>
                  <Image 
                    style={styles.logoImage}
                    source={getImageFromName('clipboardPhq9')}
                  />
                </View>
                <Text style={styles.title}>
                  What is PHQ-9?
                </Text>
                <Text style={styles.description}>
                  The PHQ-9 is a powerful tool for assisting primary care clinicians in diagnosing depression as well as&nbsp;
                  <Text style={[styles.description, styles.boldDesc]}>
                    selecting and monitoring treatment.
                  </Text>
                </Text>

              </View>
            </View>

            <View style={styles.swipeContentView}>
              <View style={styles.swipeContent}>
                <View style={styles.logoViewContainer}>
                  <Image 
                    style={styles.logoImage}
                    source={getImageFromName('clipboardQuestion')}
                  />
                </View>
                <Text style={styles.title}>
                  9 Questions
                </Text>
                <Text style={styles.description}>
                  The test consists of <Text style={[styles.description, styles.boldDesc]}>9 questions </Text> 
                  that will help you to assess whether you could be suffering from depression. The questions must be 
                  &nbsp;<Text style={[styles.description, styles.boldDesc]}>answered honestly and all in one sit. </Text>
                </Text>

              </View>
            </View>

            <View style={styles.swipeContentView}>
              <View style={styles.swipeContent}>
                <View style={styles.logoViewContainer}>
                  <Image 
                    style={styles.logoImage}
                    source={getImageFromName('clipboardInfo')}
                  />
                </View>
                <Text style={styles.title}>
                  Please Note
                </Text>
                <Text 
                  style={styles.description}
                  numberOfLines={5}
                >
                  This application is for information purposes only and is not intended to replace a consultation with a doctor. Please consult your doctor if you believe you may have depression.
                </Text>

              </View>
            </View>

            <View style={styles.swipeContentView}>
              <View style={[styles.swipeContent, styles.liabilityContent]}>
                <Text style={styles.title}>
                  Limitation of Liability
                </Text>
                <Text 
                  style={[styles.description, styles.liabilityDesc]}
                  // numberOfLines={5}
                >
                  The developers of this app shall have no liability for any damages of any kind you may sustain resulting directly or indirectly from your use of this application, your reliance on information contained in this web site, or decisions or actions taken by you based on such reliance. Such excluded damages shall include without limitation direct, indirect, special, incidental or consequential damages.If you do not agree to the terms of this disclaimer, you should not use this app.
                </Text>

              </View>
            </View>
        </Swiper>
        {
          currentPage === 3 && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.btnSkip}
                onPress={this.onPressSkip}
              >
                <Text style={styles.btnSkipText}>
                  I understand
                </Text>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    );
  }

}
