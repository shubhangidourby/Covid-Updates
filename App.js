import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { render } from 'react-dom';

export default class ButtonDemo extends Component
{
  onIncrement()
  {
    Alert.alert("INCREMENT BUTTON CLICK")
  }
  onDecrement()
  {
    Alert.alert("DECREMENT BUTTON CLICK")
  }
  onReset()
  {
    Alert.alert("RESET BUTTON CLICK")
  }

render() {
  return (
    <View style={styles.container}>
    <View style={styles.buttonDesign}>
      <Button title="INCREMENT"
      color="#3fb325"
      onPress={this.onIncrement}
      />
     
    </View>
    <View style={styles.buttonDesign}>
      <Button title="DECREMENT"
      onPress={this.onDecrement}
      color="#a81919"/>
     
    </View>
    <View style={styles.buttonDesign}>
      <Button title="RESET"
      onPress={this.onReset}
      disabled={false}
      color="#d1e05a"/>
     
    </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonDesign:{
    margin:10,
    

  },
  buttonDesign2:{
    margin:20,
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
