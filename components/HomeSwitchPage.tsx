import React, {FunctionComponent, useState} from 'react'
import HomeAbsence from './HomeAbsence';
import { TeacherIcon, RoomIcon } from '../assets/carouselIcons';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native"

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
//This component is designed purely to be used by the full carousel itself
const viewHeight = windowHeight * 0.28;

interface propTypes {
    item1:FunctionComponent,
    item2:FunctionComponent,
    index:number,
}

const HomeSwitchPage = (props:propTypes) => {
    
  if(props.index == 0){
    return(
        <props.item1/>
    )
  }
  else{
    return(
        <props.item2/>
    )
  }

}

const styles = StyleSheet.create({
 container:{
    height: "100%",
    width: '100%',
 },
  

});

export default HomeSwitchPage;
