'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ListViewExample extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let data = Array(20).fill(0).map((_, i) => {return {index: i}});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  renderRow(row) {
    return (
      <View style={styles.row} key={row.index}>
        <Text>{row.index} - Top</Text>
        <Text>{row.index} - Middle</Text>
        <Text>{row.index} - Bottom</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        style={{marginTop: 20}}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        horizontal={true}
        minimumZoomScale={1.0}
        maximumZoomScale={2.0}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    width: Dimensions.get('window').width * 0.75,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#33AAFF',
    marginRight: 10,
  },
});
