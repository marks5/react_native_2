import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Navigator extends Component {

	render() {

		const { barraTitulo, txtTitulo } = styles;

		return (
		    <View style={barraTitulo}>
		    	<Text style={txtTitulo} >Bonsai </Text>
		    </View>
		);
	}
}

const styles = StyleSheet.create({
  barraTitulo: {
  	backgroundColor: '#CCC',
  	padding: 10,
  	height: 60
  },
  txtTitulo: {
  	flex:1,
  	fontSize: 18,
  	textAlign: 'center',
  	color: '#000'
  }
});