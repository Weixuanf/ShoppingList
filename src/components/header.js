import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.navButton}>Menu</Text>
        <Text style={styles.title}>Events</Text>
        <Text style={styles.navButton}>Menu</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#1EAAF1'
  },
  navButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 64
  },
  title: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
