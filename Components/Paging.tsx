import React from 'react'
import { Pagination } from 'react-native-snap-carousel';
import { StyleSheet, Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// Simply put, these are the dots under the carousel
export default function CustomPaging({ data, activeSlide }: any) {
  const settings: any = {
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
    marginHorizontal: windowWidth / 187.5,
  },

  dotContainer: {
    width: '20%',
    paddingVertical: windowHeight *  0.027,
  },
  dotStyle: {

    width: (windowHeight * 0.337) / 50,
    height: (windowHeight * 0.337) / 50,
    backgroundColor: '#FFFFFF',
  },
  inactiveDotStyle: {
    width: (windowHeight * 0.337) / 50,
    height: (windowHeight * 0.337) / 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
})

