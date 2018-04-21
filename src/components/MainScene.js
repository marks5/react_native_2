import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import Navigator from './Navigator';

export default class MainScene extends Component {


	render() {
		return (
		  <View>
        <StatusBar backgroundColor='#CCC' />
        <Navigator />
      </View>
		);
	}
}