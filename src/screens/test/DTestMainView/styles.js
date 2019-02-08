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
  logoContainer: {
    height: height / 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    width: width / 2,
    // backgroundColor: 'red'
  },
  manualContainer: {
    height: height / 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: width / 8,
    paddingRight: width / 8
  },
  descTitle: {
    color: 'white',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold'
  },
  descText: {
    color: 'white',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center'
  },
  boldDesc: {
    fontWeight: 'bold',
    fontSize: 16
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 4 * 3,
    paddingTop: 8,
    paddingBottom: 8,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginTop: 10,
  },
  startButtonText: {
    fontSize: 24,
    color: DColors.lightGreen,
    marginRight: 5,
    fontWeight: '300'
  },
  checkmarkIcon: {
    color: 'white',
    marginRight: 10,
  }
});
