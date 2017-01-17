'use strict';

import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import ListViewExample from './ListViewExample';

export default class ReactNativeListViewZoomLoadBug extends Component {
  render() {
    return <ListViewExample />;
  }
}

AppRegistry.registerComponent('ReactNativeListViewZoomLoadBug', () => ReactNativeListViewZoomLoadBug);
