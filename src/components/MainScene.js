import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Navigation from './src/components/Navigator';

export default class MainScene extends Component {


	render() {
		return (
		    <View>
        <StatusBar /*hidden*/ backgroundColor='#CCC' />
        <Navigation />
      <View>
		);
	}
}

const styles = StyleSheet.create({
  
});