import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import LessonView from '../components/Lesson'

export default function Schedule() {
  const testdata = require("../testData.json");
  const [page,setPage] = React.useState(0);
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/carousel.png')} resizeMode="cover" style={styles.image}>
        <View style={{alignItems:'center'}}>
          <Text style={styles.HeadText}>Rozvrh</Text>
          <View style={styles.view}>

            { testdata.Days.map((item:any,index:number) => (
              <TouchableOpacity onPress={()=>{setPage(index)}} style={styles.column}>
                <Text style={styles.lessonsText}>{new Date(item.Date).getDate()}. {new Date(item.Date).toLocaleDateString('locale', { weekday: 'short' }).charAt(0).toUpperCase() + new Date(item.Date).toLocaleDateString('locale', { weekday: 'short' }).slice(1)}</Text>
                  {page == index?<View style={{height:item.Lessons.length*12,width:50,backgroundColor:"white",borderRadius:10,opacity:0.8}}></View>:<View style={{height:item.Lessons.length*12,width:50,backgroundColor:"white",borderRadius:10,opacity:0.5}}></View>}
                  <Text style={styles.lessonsText}>{item.Lessons[0].StartTime}</Text>
                  <Text style={styles.lessonsText}>{(item.Lessons[item.Lessons.length-1].StartTime)}</Text>
              </TouchableOpacity>
            ))}
            
          </View>
        </View>
      </ImageBackground>
      <View style={{borderRadius:15,overflow:'hidden',margin:20}}>
        <ScrollView style={{height:500}}>
        {testdata.Days[page].Lessons.map((item:any)=>(
        <View>
          {LessonView(item)}
        </View>
        ))}
        </ScrollView>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#e5e5e5',
  },
  image: {
    justifyContent:'center',
  },
  HeadText:{
    padding:10,
    color:"white",
    fontWeight:"700",
    fontSize:30,
  },
  column:{
    padding:5
},
lessonsText:{
    textAlign:'center',
    maxWidth:50,
    color:"white",
    opacity:0.8,
    fontWeight:'600'
},
view:{
  flexDirection:'row',
}

});
