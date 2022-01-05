import React from 'react'
import CustomPaging from './Paging'
import { View,StyleSheet, ImageBackground } from "react-native"
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { Dimensions } from 'react-native'
import data from '../data.json'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CarouselCards = () => {
  const [currentIndex, setIndex] = React.useState(0);
  const settings = {
    onSnapToItem: (index : any) => setIndex(index),  
  };
  const days = ["", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"]
  const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
  const date = new Date();
  const isCarousel = React.useRef(null)
  return (
      <ImageBackground source={require("../assets/carousel.png")} resizeMode='cover' style={styles.container}>
      <View style={styles.contentHolder}>
      <Text style={styles.header}>{days[date.getDay()]}, {date.getDate()}. {months[date.getMonth()]}</Text>
      <Carousel
        layout="stack"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data.Days[date.getDay()-1].Lessons}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        {...settings}
      />
     </View>
     <CustomPaging data={data.Days[date.getDay()-1].Lessons} activeSlide={currentIndex}/>
     </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "SF Pro Text",
    flexDirection:'row',
    width: '100%',
    marginBottom: 10,
    fontWeight: "700",
    color:"#FFFFFF",
    fontSize: (windowHeight*0.377)/10,
  },

  container: {
    opacity:15,
    width:"100%",
    backgroundColor: '#E9671E',
    justifyContent:'flex-end',
    alignItems:'center',
    height:"37.7%",
  },

  contentHolder: {
    width: windowWidth - 44,
    justifyContent: 'flex-end',
    alignItems:'center',
  }

});

export default CarouselCards
