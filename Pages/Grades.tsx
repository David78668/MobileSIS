import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Grades() {
  return (
    <View style={styles.container}>
        <Text>Grades</Text>
        
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