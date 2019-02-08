'use strict';
import React, { Component, PropTypes } from 'react';
import { 
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    // StyleSheet,
    DrawerLayoutAndroid,
    Picker,
    Navigator
} from 'react-native';
import { connect } from 'react-redux';
var { width, height } = Dimensions.get('window');

var StyleSheet = require('DStyleSheet');
var DColors = require('DColors');
import DDrawerLayout from 'DDrawerLayout';
import { Text } from 'DText';
import { getImageFromName } from 'DUtils';

import { MenuItem } from 'AppComponents';
import {
  DTestNavigator,
  DResultMainView,
  DHistoryMainView,
  DInfoNavigator
} from 'AppScreens';
import { switchTab } from 'AppActions';
import type {Tab} from '../../reducers/navigation';

import Icon from 'react-native-vector-icons/Ionicons';

class DTabsView extends Component {

  props: {
      navigator: Navigator;
  };

  childContextTypes = {
    openDrawer: React.PropTypes.func,
    onMoveToSurvey: React.PropTypes.func
  };

  constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'test'
      };
      this.renderNavigationView = this.renderNavigationView.bind(this);
      this.openDrawer = this.openDrawer.bind(this);
  }

  componentDidMount() {
      // StatusBarIOS && StatusBarIOS.setStyle('light-content');
  }

  getChildContext() {
    return {
      openDrawer: this.openDrawer,
      onMoveToSurvey: this.onMoveToSurvey
    };
  }

  openDrawer() {
    this.refs.drawer.openDrawer();
  }

  // * Move to the TestStartView
  onMoveToSurvey = () => {
    if (this.props.navigator) {
      this.props.navigator.push({survey: {}});
    }
  }

  onTabSelect = (tab: Tab) => {
    // this.setState({ selectedTab: selected });
    if (this.props.tab !== tab) {
      this.props.switchTab(tab);
    }
    this.refs.drawer.closeDrawer();
  }

  // Render
  renderNavigationView() {
    const { selectedTab } = this.state;
    const { tab } = this.props;
    // debugger;
    // asdf
    return (
      <View style={styles.drawer}>
        <MenuItem
          title="The Test"
          style={styles.tabItem}
          selected={tab === 'test'}
          onPress={this.onTabSelect.bind(this, 'test')}
          icon={getImageFromName('theTestsDefault')}
          selectedIcon={getImageFromName('theTestsActive')}
        />
        <MenuItem
          title="Results"
          style={styles.tabItem}
          selected={tab === 'results'}
          onPress={this.onTabSelect.bind(this, 'results')}
          icon={getImageFromName('resultsDefault')}
          selectedIcon={getImageFromName('resultsActive')}
        />
        <MenuItem
          title="History"
          style={styles.tabItem}
          selected={tab === 'history'}
          onPress={this.onTabSelect.bind(this, 'history')}
          icon={getImageFromName('historyDefault')}
          selectedIcon={getImageFromName('historyActive')}
        />
        <MenuItem
          title="Info"
          style={styles.tabItem}
          selected={tab === 'info'}
          onPress={this.onTabSelect.bind(this, 'info')}
          icon={getImageFromName('infoDefault')}
          selectedIcon={getImageFromName('infoActive')}
        />
      </View>
    );
  }

  renderContent() {
    // debugger;
    const { tab } = this.props;
    switch (tab) {
      case 'test':
        return <DTestNavigator />;

      case 'results':
        return <DResultMainView />;

      case 'history':
        return <DHistoryMainView />;

      case 'info':
        return <DInfoNavigator />;
    }
    throw new Error(`Unknown tab ${this.props.tab}`);
  }

  // Render
  render() {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
      );
     return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <DDrawerLayout
            ref="drawer"
            drawerWidth={220}
            drawerPosition="left"
            renderNavigationView={this.renderNavigationView}>
            <View style={styles.content} key={this.props.tab}>
              {this.renderContent()}
            </View>
          </DDrawerLayout>
        </View>
      );
  }

}

DTabsView.childContextTypes = {
  openDrawer: React.PropTypes.func,
  onMoveToSurvey: React.PropTypes.func
};

function select(store) {
  return {
    tab: store.navigation.tab,
  };
}

function actions(dispatch) {
  return {
    switchTab: (tab) => dispatch(switchTab(tab)),
  };
}

export default connect(select, actions)(DTabsView);


const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    paddingTop: 20 + 25,
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
    // backgroundColor: 'red'
  },
  tabItem: {
    backgroundColor: 'red'
  }
});
