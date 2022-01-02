import React from 'react'

import CustomPaging from './Paging'
import { View,StyleSheet } from "react-native"
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { Dimensions } from 'react-native'
import data from '../data.json'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/*const CreateDictionary = (dayAmount:number) => {
 import React from 'react'

import CustomPaging from './Paging'
import { View,StyleSheet } from "react-native"
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { Dimensions } from 'react-native'
import data from '../data.json'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/*const CreateDictionary = (dayAmount:number) => {
 
    const dict = [];
    for (let i = 0; i < dayAmount; i++) {
        dict.push({
            key:   data['Days'][i]['Date'],
            value: data['Days'][i]['Lessons']
        });
    } 
    return dict;
    
}

const schedule : any = CreateDictionary(3);*/

const CarouselCards = () => {
  
  const [currentIndex, setIndex] = React.useState(0);
  const settings = {
    onSnapToItem: (index : any) => setIndex(index),  
  };
  const date = new Date();
  const readableDate = date.toISOString().split('T')[0];
  
  const isCarousel = React.useRef(null)

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.contentHolder}>
      <Text style={styles.header}>Pondělí, 17.listopadu</Text>
      <Carousel
        layout="stack"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data.Days[0].Lessons}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        {...settings}
      />
      
     </View>
     <CustomPaging data={data.Days[0].Lessons} activeSlide={currentIndex}/>
    </SafeAreaView>

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
    fontSize: 30,
  },
  container: {
    width:"100%",
    backgroundColor: '#E9671E',
    justifyContent:'flex-end',
    alignItems:'center',
    height:"37.7%"
  },
  contentHolder: {
    width: windowWidth - 44,
    height:windowHeight*0.377*0.5 + 50,
    justifyContent: 'flex-end',
    alignItems:'center',
  }

  
    

});









export default CarouselCards
