import { Dimensions } from 'react-native';
var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');
import { TabBarHeight } from 'AppComponents';

export const styles = StyleSheet.create({
  containerStyle: {
      flexDirection: 'row',
  },
  labelStyleSelected: {
      alignSelf: 'center',
      paddingLeft: 18,
      fontSize: 22,
      fontWeight: '300',
      color: DColors.midGray
  },
  labelStyle: {
    alignSelf: 'center',
    paddingLeft: 18,
    fontSize: 22,
    fontWeight: '300',
    color: DColors.lightGray
  },
  checkboxStyle: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: DColors.lightGray,
    borderRadius: 16,
  },
  checkboxSelectedStyle: {
    width: 32,
    height: 32,
    borderWidth: 0,
    borderRadius: 16,
  },
  checkboxIcon: {
    backgroundColor: 'transparent', 
    color: 'white'
  }
});
