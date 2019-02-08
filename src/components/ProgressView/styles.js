import { Dimensions } from 'react-native';
var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');
import { TabBarHeight } from 'AppComponents';
export const segmentWidth = 3;
export const segmentHeight = 8;
export const progressHeight = 32;

export const styles = StyleSheet.create({
  itemContainer: {
    // backgroundColor: 'rgba(102, 204, 102, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: progressHeight,
    borderRadius: progressHeight / 2,
    // borderWidth: 2,
    borderColor: 'white'
  },
  itemBack: {
    // flex: 1,  
    // backgroundColor: 'blue'
  },
  itemProgress: {
    backgroundColor: 'white',
    height: progressHeight,
    // marginLeft: -2,
    borderTopLeftRadius: progressHeight / 2 ,
    borderBottomLeftRadius: progressHeight / 2 ,
    width: 0
  },
  fullProgress: {
    borderTopRightRadius: progressHeight / 2,
    borderBottomRightRadius: progressHeight / 2 ,

  },
  textBack: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressText: {
    backgroundColor: 'transparent',
    fontSize: 18,
    color: 'white'
  },

  tagViewContainer: {
    // marginLeft: progressHeight / 2 - 2,
    flexDirection: 'row',
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: -2,
    left: progressHeight / 2 ,
    height: segmentHeight * 2,
    alignItems: 'flex-end'
  },
  tagView: {
    width: segmentWidth,
    height: segmentHeight,
    // marginRight: 5,
    backgroundColor: 'white',
    position: 'absolute'
  },
  tagViewSelected: {
    backgroundColor: DColors.lightGreen
  }

});
