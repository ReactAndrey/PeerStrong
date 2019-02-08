import { Dimensions } from 'react-native';
var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');
const listItemHeight = 50;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white'
    // backgroundColor: DColors.lightGreen
  },

  content: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  // List Item Component styles
  listItemContainer: {
    flexDirection: 'row',
    width: width,
    height: listItemHeight,
    borderBottomWidth: 1,
    borderBottomColor: DColors.lightGray
  },
  firstItem: {
    height: listItemHeight + 1,
    borderTopWidth: 1,
    borderTopColor: DColors.lightGray
  },
  itemButton: {
    flex: 1,
    height: listItemHeight - 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  },
  dateString: {
    flex: 3.5,
    color: DColors.darkGray
  },
  timeCont: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  timeValue: {
    color: DColors.darkGray,
    fontWeight: '200',
    paddingRight: 3
  },
  timePeriod: {
    color: DColors.darkGray,
    fontSize: 9,
    fontWeight: '200'
  },
  statusView: {
    flex: 5,
    flexDirection: 'row',

  },
  scoreView: {
    flex: 3.5,
    color: DColors.darkGray,
    fontWeight: '200',
    textAlign: 'center',
  },
  scoreText: {
    fontWeight: 'bold',
    color: DColors.darkGray
  },
  iconCont: {
    flex: 1.5,
    alignItems: 'center'
  },
  itemIcon: {
  
    width: 20,
    color: DColors.lightGreen
  },
  
});
