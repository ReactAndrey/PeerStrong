import { Dimensions } from 'react-native';
var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');
const listItemHeight = 85;
export const styles = StyleSheet.create({
  // List Item Component styles
  listItemContainer: {
    width: width,
    height: listItemHeight,
    borderBottomWidth: 1,
    borderBottomColor: DColors.lightGray,
    backgroundColor: '#fffff7',
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20
  },

  itemTitle: {
    fontSize: 15,
    color: DColors.midGray,
    lineHeight: 24,
  },
  itemScores: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5
  },
  scoreText: {
    flex: 1,
    color: DColors.midGray,
    fontWeight: 'bold'
  },
  iconView: {
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: DColors.lightGray,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedIcon: {
    borderWidth: 0
  },
  itemiconDown: {
    marginBottom: 0,
    // marginTop: 1
  },
  itemiconMinus: {
    // marginBottom: 0,
    // marginTop: 1
    marginBottom: 4,
    marginTop: 0,
    width: 6,
    height: 6.5,
  },
  itemIcon: {
    width: 14,
    height: 13,
    marginBottom: 2,
    marginLeft: 1,
    backgroundColor: 'transparent',
    color: DColors.lightGreen,
    textAlign: 'center',
    alignSelf: 'center',
  },
  
});
