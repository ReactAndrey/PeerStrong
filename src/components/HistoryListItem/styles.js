import { Dimensions } from 'react-native';
var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');
const listItemHeight = 50;
export const styles = StyleSheet.create({
  // List Item Component styles
  listItemContainer: {
    flexDirection: 'row',
    width: width,
    height: listItemHeight,
    borderBottomWidth: 1,
    borderBottomColor: DColors.lightGray
  },
  listItemContSelected: {
    backgroundColor: DColors.lightGreen
  },
  selectedText: {
    color: 'white'
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
    color: DColors.midGray
  },
  timeCont: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  timeValue: {
    color: DColors.midGray,
    fontWeight: '200',
    paddingRight: 3
  },
  timePeriod: {
    color: DColors.midGray,
    fontSize: 9,
    fontWeight: '200'
  },
  statusView: {
    flex: 5,
    flexDirection: 'row',

  },
  scoreView: {
    flex: 3.5,
    color: DColors.midGray,
    fontWeight: '200',
    textAlign: 'center',
  },
  scoreText: {
    fontWeight: 'bold',
    color: DColors.midGray
  },
  iconCont: {
    flex: 1.5,
    alignItems: 'center'
  },
  iconView: {
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
    marginTop: 1,
  },
  itemiconMinus: {
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
