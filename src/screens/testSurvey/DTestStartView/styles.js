import { Dimensions } from 'react-native';
var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: DColors.lightGreen
  },

  content: {
  	flex: 1,
  	backgroundColor: DColors.lightGreen,
  	alignItems: 'center'
  },
  manualContainer: {
    marginTop: 50,
    height: height / 5 + height / 4,
  	justifyContent: 'flex-start',
    alignItems: 'flex-start',
  	paddingLeft: width / 8,
  	paddingRight: width / 8
  },
  descTitle: {
  	color: 'white',
  	fontSize: 36,
    paddingTop: 20,
    paddingBottom: 30,
  },
  descText: {
  	color: 'white',
  	fontSize: 18,
  	lineHeight: 30
  },
  descName: {
    color: 'white',
    fontSize: 14
  },
  boldDesc: {
  	fontWeight: 'bold',
  	fontSize: 16
  },
  startButton: {
  	flexDirection: 'row',
  	alignItems: 'center',
    justifyContent: 'center',
  	paddingTop: 8,
  	paddingBottom: 8,
  	height: 50,
  	borderRadius: 25,
  	backgroundColor: 'white',
  	marginTop: 10,
    width: width / 4 * 3
  },
  startButtonText: {
  	fontSize: 24,
  	color: DColors.lightGreen,
  	marginRight: 5
  },
  checkmarkIcon: {
  	color: 'white',
  	marginRight: 10,
  }
});
