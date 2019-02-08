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
  itemTitle: {
    flex: 1,
    color: DColors.midGray
  },
  itemIcon: {
    width: 30,
    color: "#CCCCCC",
    paddingLeft: 5
  },
  itemRightIndent: {
    width: 10,
    height: listItemHeight - 1,
    backgroundColor: '#f5f5f5'
  },

});
