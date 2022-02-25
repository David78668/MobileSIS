import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import LessonView from '../components/Lesson'
import {userid,bareer} from "../components/Token";

export default function Schedule() {

  const testdata = require("../testData.json");

  const data:any = async () => {
    let response = await fetch(
      'https://api.sis.kyberna.cz/api/timetable/bydate/range?userId='+userid+'&date=2022/02/23&days=5',{method:'get',headers:new Headers({'Authorization':bareer.toString()})}
    );
    let json = await response.json();
    return json;
  }
  const [page,setPage] = React.useState(0);
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/carousel.png')} resizeMode="cover" style={styles.image}>
        <View style={{alignItems:'center'}}>
          <Text style={styles.HeadText}>Rozvrh</Text>
          <View style={styles.view}>

            { data.map((item:any,index:number) => (
              <TouchableOpacity onPress={()=>{setPage(index)}} style={styles.column}>
                <Text style={styles.lessonsText}>{new Date(item.date).getDate()}. den</Text>
                  {page == index?<View style={{height:item.timetable.length*12,width:50,backgroundColor:"white",borderRadius:10,opacity:0.8}}></View>:<View style={{height:item.timetable.length*12,width:50,backgroundColor:"white",borderRadius:10,opacity:0.5}}></View>}
                  <Text style={styles.lessonsText}>{item.timetable[0].date}</Text>
                  <Text style={styles.lessonsText}>{(item.timetable[item.timetable.length-1].date)}</Text>
              </TouchableOpacity>
            ))}
            
          </View>
        </View>
      </ImageBackground>
      <View style={{borderRadius:15,overflow:'hidden',margin:20}}>
        <ScrollView style={{height:500}}>
        {data[page].timetable.map((item:any)=>(
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
