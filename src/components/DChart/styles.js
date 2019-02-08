import { Dimensions } from 'react-native';
var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');
export const styles = StyleSheet.create({
  chartView: {
    width: width,
    height: 150,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: DColors.lightGray
  },
  
});
