import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ScheduleChangeBoxProps {
    StartTime:string,
    ShortName:string,
    Classroom:string,
    Teacher:string,
    Lessons:any,
}

export default function ScheduleChangeBox(props:ScheduleChangeBoxProps){
    function computeTime(time: string, lenght: number) {
        let splitTime = time.split(':')
        let hours = isNaN(Number(splitTime[0])) ? 0 : Number(splitTime[0]);
        let minutes = isNaN(Number(splitTime[1])) ? 0 : Number(splitTime[1]);
        minutes += lenght;
        while (minutes >= 60) {
          hours++;
          minutes -= 60;
        }
        return (
          `${hours}:${minutes < 10 ? "0" + minutes : minutes}`
        )
      }
  
    function getChangedClassroom(StartTime:any, Lessons:any)
    {
      let ChangedClassroom
      {Lessons.map((item:any) => (
        item.StartTime == StartTime && item.LessonType != "LessonChanged"? ChangedClassroom = item.Classroom :null
      ))};
      return(ChangedClassroom)
    }
    return(
        <View style={styles.change}>
        <View style={styles.changeleft}>
          <Text style={styles.classstart}>{props.StartTime[0] != '0' ? props.StartTime : props.StartTime.slice(1,5)}</Text>
          <Text style={styles.classend}>{computeTime(props.StartTime, 45)}</Text>
        </View>
        <View style={styles.changeright}>
          <View style={styles.top}>
            <Text style={styles.difference}>Změna</Text>
            
            <Text style={styles.lesson}>{props.ShortName}</Text>
          </View>
  
        
          <View style={styles.bottom}>
           <View style={styles.classroom}>
           <Ionicons color="#EE5656" size={15} name="easel"></Ionicons>
              <Text style={styles.classroomtext}>{props.Classroom}</Text>
              <Text style={styles.fromclassroomtext}>(z {getChangedClassroom(props.StartTime, props.Lessons)})</Text>
            </View>
  
            <View style={styles.teacher}>
              <Ionicons color="#EE5656" size={15} name="person-circle"></Ionicons>
              <Text style={styles.teachertext}>{props.Teacher}</Text>
            </View>
          </View>
        </View>
      </View> 
    )
}

const styles = StyleSheet.create({
    change:{
      backgroundColor:"white",
      alignSelf:'center',
      width:210,
      height:100,
      marginRight:10,
      flexDirection:'row',
      shadowColor: "#C4C4C4",
      shadowOpacity:10,
      shadowRadius:10,
      borderRadius:10,
    },
    changeleft:{
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      width:66,
      height:100,
      backgroundColor: '#EE5656',
      justifyContent:'center',
      alignItems:'center',
    },
    classstart:{
      color:'white',
    },
    classend:{
      color:'white',
      opacity:50,
    },
    changeright:{
      width:120,
      height:100,
      marginLeft:10,
      overflow:'hidden',
    },
    top:{
      width:144,
      height:50,
      justifyContent:'space-evenly',
    },
    difference:{
      fontSize:14,
      fontWeight:'400',
    },
    lesson:{
      fontSize:21,
      fontWeight:'600',
    },
    bottom:{
      width:144,
      height:50,
      paddingTop:3,
      paddingBottom:3,
      justifyContent:'space-evenly',
      backgroundColor: 'white',
    },
    classroom:{
      flexDirection:'row',
      alignItems:'center',
    },
    classroomtext:{
      marginLeft:4,
      fontWeight:'500',
      fontSize:15,
    },
    fromclassroomtext:{
      marginLeft:3,
      opacity:35,
      fontWeight:'500',
      fontSize:15,
    },
    teacher:{
      flexDirection:'row',
      alignItems:'center',
    },
    teachertext:{
      marginLeft:4,
      fontWeight:'500',
      fontSize:15,
    },
  });