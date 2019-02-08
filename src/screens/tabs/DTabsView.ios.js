/**
 * @flow
 * @providesModule DTabsView
 */

'use strict';
import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  Navigator
} from 'react-native';
import { connect } from 'react-redux';
var DColors = require('DColors');
var StyleSheet = require('DStyleSheet');
import { getImageFromName } from 'DUtils';

import {
  DTestNavigator,
  DResultMainView,
  DHistoryMainView,
  DInfoNavigator
} from 'AppScreens';
import { switchTab } from 'AppActions';
import type {Tab} from '../../reducers/navigation';
 
class DTabsView extends Component {
  props: {
    navigator: Navigator;
    switchTab: (tab: Tab) => void;
  };

  constructor(props) {
    super(props);
    this.state = {
      unreadMessages: 0,
      selectedTab: 'test'
    };
    this.onTabSelect = this.onTabSelect.bind(this);
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    
  }

  // * Context
  getChildContext() {
    return {
      onMoveToSurvey: this.onMoveToSurvey
    };
  }


  // Actions

  // * Move to the TestStartView
  onMoveToSurvey = () => {
    if (this.props.navigator) {
      this.props.navigator.push({survey: {}});
    }
  }

  onTabSelect(tab: Tab) {
    // this.setState({ selectedTab: selected });
    if (this.props.tab !== tab) {
      this.props.switchTab(tab);
    }
  }
          
  render() {
    const { selectedTab } = this.state;
    const { tab } = this.props;
    return (
      <TabBarIOS 
        tintColor={DColors.lightGreen}
        barTintColor={'white'}
        style={styles.tabBar}
      >
        <TabBarIOS.Item
          title="THE TEST"
          style={styles.tabItem}
          selected={tab === 'test'}
          onPress={this.onTabSelect.bind(this, 'test')}
          icon={getImageFromName('theTestsDefault')}>
            <DTestNavigator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="RESULTS"
          style={styles.tabItem}
          selected={tab === 'results'}
          onPress={this.onTabSelect.bind(this, 'results')}
          icon={getImageFromName('resultsDefault')}>
            <DResultMainView />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="HISTORY"
          style={styles.tabItem}
          selected={tab === 'history'}
          onPress={this.onTabSelect.bind(this, 'history')}
          icon={getImageFromName('historyDefault')}>
            <DHistoryMainView />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="INFO"
          style={styles.tabItem}
          selected={tab === 'info'}
          onPress={this.onTabSelect.bind(this, 'info')}
          icon={getImageFromName('infoDefault')}>
            <DInfoNavigator />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

}

DTabsView.childContextTypes = {
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
  tabBar: {
    backgroundColor: 'white',
  },

  tabItem: {
  }
});
