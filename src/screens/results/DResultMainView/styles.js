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
  
  topStatusBar: {
    flexDirection: 'row',
    height: 60,
    width: width,
    backgroundColor: DColors.darkGreen,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  leftDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    color: 'white',
    paddingLeft: 8,
    paddingRight: 8
  },
  dateCont: {
  },
  dateText: {
    color: 'white',
    fontWeight: 'bold'
  },
  timeText: {
    color: 'white'
  },
  rightLocContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },

  scoreProgressView: {
    marginTop: height / 20
  },
  scoreView: {
    alignItems: 'center'
  },
  scoreText: {
    fontSize: 100,
    color: 'white',
    fontWeight: "200"
  },
  scoreBold: {
    fontWeight: '400'
  },
  progressView: {
    width: width - 20 * 2 - 18 * 2
  },
  progressBar: {
    marginTop: 10,
    marginBottom: 20
  },

  meaningView: {
    alignItems: 'flex-start',
    paddingLeft: 20 + 18,
    paddingRight: 20 + 18
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  desc: {
    color: 'white',
    lineHeight: 20,
    fontSize: 15
  },
  descBold: {
    fontWeight: 'bold'
  },

  buttonArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50 + 30

  },
  btnFind: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    width: width / 2,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtBtnFind: {
    color: 'white',
    fontSize: 18
  }

});
