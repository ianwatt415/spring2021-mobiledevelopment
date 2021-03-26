import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button} from 'react-native-elements' ;

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Ian Watt</Card.Title>
        <Text>Pizza</Text>
        <Card.Divider/>
        <Text>French Fries</Text>
        <Button title="Submit"/>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
