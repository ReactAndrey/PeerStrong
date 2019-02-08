import { Dimensions } from 'react-native';
var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');
const dotMargin = ((width / 4 * 3 - 10) / 8 - 10) / 2;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  wrapper: {
    height: height / 3,
  },
  paginationStyle: {
    // backgroundColor: 'red',
    // bottom: 120
  },
  activeDotStyle: {
    backgroundColor: 'white', 
    borderColor: DColors.lightGreen,
    borderWidth: 3,
    width: 10, 
    height: 10, 
    borderRadius: 5, 
    marginRight: dotMargin,
    marginLeft: dotMargin,
  },
  dotStyle: {
    // backgroundColor: DColors.lightGray, 
    borderColor: DColors.lightGray,
    borderWidth: 1,
    backgroundColor: 'white',
    width: 10, 
    height: 10,
    borderRadius: 5, 
    marginRight: dotMargin,
    marginLeft: dotMargin,
  },

  swipeContentView: {
  	// height: height / 4,
    position: 'relative',
  },
  swipeContent: {
    // height: height / 4,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingLeft: 20,
    // paddingRight: 20
    paddingLeft: width / 8,
    paddingRight: width / 8,
  },
  titleContainer: {
    height: height / 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: width / 4 * 3,
    // backgroundColor: 'red'
  },
  title: {
  	fontSize: 40,
  	color: DColors.lightGreen,
  },
  answerContainer: {
    width: width / 4 * 3,
    height: height / 3 * 2,
    paddingTop: height / 24
  },
  checkboxItem: {
    marginTop: 10,
    marginBottom: 10
  },

  bottomDesc: {
    position: 'absolute',
    left: width / 8,
    bottom: 30,
    color: '#cccccc',
    fontSize: 12
  }
  
});
