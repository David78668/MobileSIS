import React, { useRef } from 'react'
import CustomPaging from './Paging'
import { View, StyleSheet, ImageBackground } from "react-native"
import { Text } from 'react-native'
import Carousel, { CarouselProperties } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { Dimensions } from 'react-native'
import data from '../data.json'

let schedule = data.Days[0].Lessons;
//The carousel itself, including the date and pagination
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const date = new Date();


function getCurrentClass(duration: number, data:any) {
 
  for(let i = 0; i < data.length; i++){
    let splitTime = data[i].StartTime.split(':')   
    let hours = Number(splitTime[0]);
    let minutes = Number(splitTime[1]);
    let startTime = hours * 60 + minutes;
    let endTime = startTime + duration;
    let currentTime = date.getHours() * 60 + date.getMinutes();
    if (currentTime < startTime) {
      return i;
    }
  }
  
  return 0;
}

const CarouselCards = () => {
  let [currentIndex, setIndex] = React.useState(getCurrentClass(45,schedule));
  
  const settings = {
    onSnapToItem: (index: any) => setIndex(index),
  };
  const days = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", ]
  const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
  const c = useRef(null);
  const index = getCurrentClass(45, schedule);

  return (
    <ImageBackground source={require("../assets/carousel.png")} resizeMode='cover' style={styles.container}>
      <View style={styles.contentHolder}>
        <Text style={styles.header}>{days[date.getDay()]}, {date.getDate()}. {months[date.getMonth()]}</Text>
        <Carousel
          layout="stack"
          layoutCardOffset={0}
          ref={c}
          data={schedule}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          firstItem={currentIndex}
          useScrollView={true}
          
          {...settings}
        />
      </View>
      <CustomPaging data={schedule} activeSlide={currentIndex}/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    fontWeight: "700",
    color: "#FFFFFF",
    fontSize: 21,
  },

  container: {
    opacity: 15,
    width: "100%",
    backgroundColor: '#E9671E',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: windowHeight * 0.37,
  },

  contentHolder: {
    width: windowWidth - 44,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }

});

export default CarouselCards
