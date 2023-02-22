import React, { useRef } from "react";
import GetColors from "../../../declarations/colors";
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  FlatList
} from "react-native";
import CarouselItem, { CarouselItemProps } from './CarouselItem';
import { useTheme } from "../../../context/ThemeProvider";

export interface CarouselProps {
    data: Array<CarouselItemProps>
}

export default function Carousel(props: CarouselProps) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width;
  const darkMode = useTheme();
		const Colors = GetColors(darkMode.value);
  function renderDot({ item, index }: any) {
    const width = scrollX.interpolate({
      inputRange: [
        windowWidth * (index - 1),
        windowWidth * index,
        windowWidth * (index + 1)
      ],
      outputRange: [5, 8, 5],
      extrapolate: 'clamp'
    });

    const opacity = scrollX.interpolate({
      inputRange: [
        windowWidth * (index - 1),
        windowWidth * index,
        windowWidth * (index + 1)
      ],
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp'
    });

    return <Animated.View style={[styles.normalDot, { width, height: width, opacity: opacity }]} />;
  }
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center"
    },
    scrollContainer: {
      alignItems: "center",
      justifyContent: "center",
      overflow: 'visible',
    },
    normalDot: {
      borderRadius: 4,
      marginHorizontal: 5,
      backgroundColor: Colors.PrimaryBackgroundColor
    },
    indicatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      height: 8
    }
  });
  
  return (
    <View style={styles.container}>
         <FlatList
          data={props.data}
          renderItem={({ item }) => <CarouselItem item={item.item} />}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX }}}], { useNativeDriver: false })}
          horizontal
          scrollEnabled
          snapToInterval={windowWidth}
          decelerationRate= {0.5}
          scrollEventThrottle={1} />
      
       <FlatList
          data={props.data}
          renderItem={renderDot}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.indicatorContainer}
          scrollEventThrottle={1} />
    </View>
  );
}
