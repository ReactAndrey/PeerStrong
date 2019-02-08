import { Dimensions } from 'react-native';
var StyleSheet = require('DStyleSheet');
var { width, height } = Dimensions.get('window');
var DColors = require('DColors');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white'
    // backgroundColor: DColors.lightGreen
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 50,
    // paddingTop: 20
  },

  // About Styles
  listView: {
    flex: 1,
    width: width
  },

  firstTitle: {
    paddingTop: 20
  },

  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: DColors.lightGray,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 8,
    paddingTop: 10
  },
  title: {
    fontSize: 20,
    color: DColors.lightGreen,
    
  },
  desc: {
    padding: 20,
    fontSize: 15,
    lineHeight: 24,
    color: DColors.midGray
  },

  // manual view
  manualList: {
    marginTop: -1
  },
  manualListItem: {
    borderBottomWidth: 1,
    borderBottomColor: DColors.lightGray,
    padding: 20
  },
  isFirstItem: {
    borderTopWidth: 1,
    borderTopColor: DColors.lightGray
  },
  manualTitle: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  manualDesc: {
    fontSize: 14,
    lineHeight: 20,
    padding: 0,
  },  
  boldDesc: {
    fontWeight: 'bold'
  },
  underlineDesc: {
    textDecorationLine: 'underline'
  },
  manualAdvIcon: {
    width: 9,
    height: 9,
    backgroundColor: 'white',
    borderRadius: 4.5,
    borderWidth: 3,
    borderColor: DColors.lightGreen,
    alignSelf: 'flex-start',
    marginTop: 4,
    marginRight: 6,
  },
  greenCircle: {
    borderColor: DColors.graphGreen
  },

  yellowCircle: {
    borderColor: DColors.graphYellow
  },

  orangeCircle: {
    borderColor: DColors.graphOrange
  },

  redCircle: {
    borderColor: DColors.graphRed
  },

  manualAdvList: {
    padding: 0
  },
  manualAdvText: {
    fontSize: 14,
    flex: 1,
    color: DColors.lightGreen
  },

  // About View
  advList: {
    padding: 20,
    paddingTop: 10
  },
  advCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  advIcon: {
    color: DColors.lightGreen,
    marginRight: 10,
    alignSelf: 'flex-start',
    paddingTop: 5
  },
  advText: {
    flex: 1,
    fontSize: 15,
    color: DColors.lightGreen
  },

  // Profile styles
  profileCont: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  photoImageCont: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderColor: '#ededed',
    // borderWidth: 5,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden'
  },
  jobPosition: {
    // color: '#999999',
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: '300',
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 12
  },
  name: {
    color: DColors.darkGray,
    fontWeight: 'bold'
  },
  designText: {
    color: '#999999',
    fontWeight: '300',
    paddingTop: 3,
  },
  logoImageContainer: {
    alignItems: 'flex-end',
  },
  logoImage: {
    width: 100,
    alignSelf: 'flex-start'
  }
});
