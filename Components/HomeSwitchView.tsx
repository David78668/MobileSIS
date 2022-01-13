import React, {FunctionComponent, useState} from 'react'
import HomeAbsence from './HomeAbsence';
import HomeNewGrades from './HomeNewGrades';
import HomeSwitchPage from './HomeSwitchPage';
import { TeacherIcon, RoomIcon } from '../assets/carouselIcons';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native"

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
//This component is designed purely to be used by the full carousel itself
const viewHeight = windowHeight * 0.23;



const HomeSwitchView = () => {
    const [currentView, setView] = useState(0);
  return (
    <View style={styles.container}>
        <View style={styles.switches}>
            <TouchableWithoutFeedback onPress={() => setView(0)}><Text style={[styles.text, styles.leftText, currentView == 0 ? styles.textActive : styles.textDisabled]}>Absence</Text></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setView(1)}><Text style={[styles.text, currentView == 1 ? styles.textActive : styles.textDisabled]}>Nové známky</Text></TouchableWithoutFeedback>
        </View>
        <HomeSwitchPage item1={HomeAbsence} item2={HomeNewGrades} index={currentView}/>
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
    height: viewHeight,
 },
  switches:{
    flexDirection: 'row',
    height: windowHeight*0.027,
  },
  leftText:{
    marginLeft: windowWidth*0.059,
  },
  textActive:{
    color:'#050505',
    textDecorationLine: 'underline',
  },
  textDisabled:{
    color: '#C7C7CC',
  },

  text:{
    
    marginRight: windowWidth*0.043,
    fontWeight: 'bold',
    height: "100%",
    fontSize: windowHeight*0.022,
  }

});

export default HomeSwitchView;
