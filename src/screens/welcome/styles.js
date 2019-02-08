import { Dimensions, StyleSheet } from 'react-native';
// var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height / 20,
    backgroundColor: DColors.lightGreen
  },
  wrapper: {
    // paddingTop: 20,
    height: height / 6 * 5,
  },
  paginationStyle: {

  },
  activeDotStyle: {
    // backgroundColor: DColors.lightGreen, 
    backgroundColor: 'white',
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    margin: 8,
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.19)', 
    width: 8, 
    height: 8,
    borderRadius: 4, 
    margin: 8
  },

  logoViewContainer: {
  	marginTop: height / 10,
  	height: 100 + height / 10,
  	width: width - 40,
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  logoView: {
  	width: 100,
  	height: 100,
  	borderColor: DColors.darkGray,
  	borderWidth: 7,
  	borderRadius: 50,
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  logoText: {
  	fontSize: 20,
  	fontWeight: 'bold'
  },

  swipeContentView: {
  	height: height / 6 * 5,
    position: 'relative',
  },
  swipeContent: {
    height: height / 7 * 6,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  liabilityContent: {
    paddingTop: 20
  },
  title: {
  	textAlign: 'center',
  	fontSize: 24,
  	// color: DColors.lightGreen,
    color: 'white',
  	paddingTop: 20,
  	paddingBottom: 20
  },
  description: {
  	textAlign: 'center',
  	fontSize: 15,
  	lineHeight: 26,
  	// color: DColors.darkGray
    color: 'white'
  },
  liabilityDesc: {
    textAlign: 'left',
    lineHeight: 24,
    paddingLeft: width / 20,
    paddingRight: width / 20
  },
  boldDesc: {
  	fontWeight: 'bold'
  },

  btnSkip: {
  	backgroundColor: 'white',
  	padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  	height: 36,
  	// width: 80,
  	borderRadius: 18,
    borderColor: 'white',
    borderWidth: 1,
  	alignItems: 'center',
  	justifyContent: 'center'

  },
  btnSkipText: {
  	color: DColors.lightGreen,
    fontSize: 18
  }


});
