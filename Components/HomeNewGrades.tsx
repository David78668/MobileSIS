import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function HomeNewGrades() {
  return (
    <View style={styles.container}>
      <Text>NewGrades</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    color: "red",
    height: "100%",
    width: "100%",
    }
  })