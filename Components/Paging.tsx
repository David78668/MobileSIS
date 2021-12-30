import React from 'react'
import { Pagination } from 'react-native-snap-carousel';
import { View, StyleSheet } from 'react-native';

export default function CustomPaging({ data, activeSlide }:any) {
  const settings : any = {
    dotsLength: data.length,
    activeDotIndex: activeSlide,
    containerStyle: styles.dotContainer,
    dotContainerStyle: styles.dottingContainer,
    dotStyle: styles.dotStyle,
    inactiveDotStyle: styles.inactiveDotStyle,
    inactiveDotOpacity: 1,
    inactiveDotScale: 1,
  };
  return (
    <Pagination {...settings} />
  );
}

const styles = StyleSheet.create({
    dottingContainer: {
      marginHorizontal:2,
    },

    dotContainer: {
      width: '20%',
      paddingVertical: 22,
      },
      dotStyle: {
        
        width: 6,
        height: 6,
        backgroundColor: '#FFFFFF',
      },
      inactiveDotStyle: {
        marginHorizontal:0,
        width: 6,
        height: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
})

