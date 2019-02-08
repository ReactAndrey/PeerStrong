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

  listView: {
    flex: 1,
    width: width
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
  itemTitle: {
    flex: 1,
    color: DColors.midGray
  },
  itemIcon: {
    width: 20,
    color: DColors.midGray
  },
  itemRightIndent: {
    width: 10,
    height: listItemHeight - 1,
    backgroundColor: '#f5f5f5'
  },

  memoView: {
    marginTop: 40,
    alignItems: 'center'
  },
  textDesc: {
    fontSize: 15,
    color: DColors.darkGray,
    marginBottom: 10
  },
  linkText: {
    color: DColors.lightGreen
  }
});
