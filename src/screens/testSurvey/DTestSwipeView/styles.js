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
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: width / 8,
    paddingRight: width / 8
  },
  descText: {
    color: 'white',
    fontSize: 22,
    lineHeight: 30
  },
  boldDesc: {
    fontWeight: 'bold',
    fontSize: 22
  },
  
  startContainer: {
    flexDirection: 'row',
    width: width / 4 * 3,
    height: height / 2,
    // justifyContent: 'center',
    marginTop: height / 6
  },
  startText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500'
  },
  startImageContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  startImage: {
    height: 36,

  }
});
