import React from 'react'
import RoomIco from '../assets/room';
import TeacherIco from '../assets/teacher';
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const SLIDER_WIDTH = windowWidth - 44;
export const ITEM_WIDTH = Math.round(windowWidth - 44)

function computeTime(time:string, lenght:number){
  let splitTime = time.split(':')
  let hours = isNaN(Number(splitTime[0])) ? 0 : Number(splitTime[0]);
  let minutes = isNaN(Number(splitTime[1])) ? 0 : Number(splitTime[1]);
  minutes += lenght;
  while(minutes >= 60){
    hours++;
    minutes -= 60
  }
  return(
    `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
  )
}

 const CarouselCardItem = ({item, index}:any) => {
  return (
    <View style={styles.container} key={index}>
      <View style={styles.timeContainer}>
        <Text style={styles.basicLabel}>{item.StartTime}</Text>
        <Text style={styles.endTimeLabel}>{computeTime(item.StartTime, 45)}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.cardBody}>
        <Text style={styles.basicLabel}>{index == 0 ? "Právě probíhá" : "Následuje"}</Text>
        <Text style={styles.subjectLabel}>{item.Name}</Text>
        <View style={styles.paralel}>
          <RoomIco style={styles.icon}/>
          <Text>{item.Classroom}</Text>
        </View>
        <View style={styles.paralel}>
          <TeacherIco style={styles.icon}/>
          <Text>{item.Teacher}</Text>
        </View>
        <View>
        </View>
      </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
 icon:{
   width: 12,
   height: 12,
   marginRight: 6,
 },

 divider:{
  borderRadius:10,
  height:"61%",
  width:"1%",
  backgroundColor:"#DE6830",
  marginRight:11,
 },

 paralel:{
   flexDirection:'row',
   alignItems:'center',
   flexWrap:'nowrap',
 },

 container:{
    
   height:windowHeight*0.377*0.5,
   alignItems:"center",
   justifyContent:"flex-start",
   flexDirection:'row',
    backgroundColor: "#FFFFFF",
    borderRadius:10,
 },

 timeContainer:{
  marginLeft:15,
  marginRight:12,
 },

 basicLabel:{
  fontWeight:"500",
  fontSize:14,
  lineHeight:17,
  letterSpacing:-0.24,
  
 },

 subjectLabel:{
  fontSize:21,
  fontWeight:"600",
 },

 endTimeLabel:{
  fontWeight:"500",
  color:"#C7C7CC"
 },

 cardBody:{
 
  
 },

});

export default CarouselCardItem;