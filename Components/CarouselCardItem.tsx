import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

 const CarouselCardItem = ({item, index}:any) => {
  return (
    <View style={styles.container} key={index}>
    <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
    backgroundColor: "#FFFFFF",

 },

});

export default CarouselCardItem;