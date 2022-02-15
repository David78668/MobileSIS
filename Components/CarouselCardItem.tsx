import React from 'react'
import { TeacherIcon, RoomIcon } from '../assets/carouselIcons';
import { View, Text, StyleSheet, Dimensions } from "react-native"

//This component is designed purely to be used by the full carousel itself
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const date = new Date();
export const SLIDER_WIDTH = windowWidth - 44;
export const ITEM_WIDTH = Math.round(windowWidth - 44)

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

function labelChange(time: string, duration: number, subject: string) {
  let splitTime = time.split(':')
  let hours = Number(splitTime[0]);
  let minutes = Number(splitTime[1]);
  let startTime = hours * 60 + minutes;
  let endTime = startTime + duration;
  let currentTime = date.getHours() * 60 + date.getMinutes();
  if (currentTime < startTime) {
    return "Proběhne";
  }
  if (currentTime >= startTime && currentTime <= endTime) {
    return "Právě Probíhá";
  }
  if (currentTime > endTime) {
    return "Proběhlo";
  }
}

const CarouselCardItem = ({ item, index }: any) => {
  return (
    <View style={styles.container} key={index}>
      <View style={styles.timeContainer}>
        <Text style={[styles.basicLabel, {textAlign:'right'}]}>{item.StartTime[0] != 0 ? item.StartTime : item.StartTime.slice(1,5)}</Text>
        <Text style={styles.endTimeLabel}>{computeTime(item.StartTime, 45)}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.cardBody}>
        <Text style={styles.basicLabel}>{labelChange(item.StartTime, 45, item.Name)}</Text>
        <Text style={styles.subjectLabel}>{item.Name}</Text>
        <View style={styles.paralel}>
          <RoomIcon style={styles.icon} />
          <Text style={styles.basicLabel}>{item.Classroom}</Text>
        </View>
        <View style={styles.paralel}>
          <TeacherIcon style={styles.icon} />
          <Text style={styles.basicLabel}>{item.Teacher}</Text>
        </View>
        <View>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  icon: {
    width: (windowHeight * 0.377 * 0.5) / 10.75,
    height: (windowHeight * 0.377 * 0.5) / 10.75,
    marginRight: 6,
  },

  divider: {
    borderRadius: 10,
    height: "61%",
    width: "1%",
    backgroundColor: "#DE6830",
    marginRight: '3.3%',
  },

  paralel: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },

  container: {
    height: windowHeight * 0.377 * 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: 'row',
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },

  timeContainer: {
    marginLeft: '4.5%',
    marginRight: '4%',
  },

  basicLabel: {
    textAlign:'left',
    fontSize: 14,
  },

  subjectLabel: {
    fontSize: 21,
    fontWeight: "600",
  },

  endTimeLabel: {
    fontSize: 14,
    color: "#C7C7CC",
  },

  cardBody: {
    paddingVertical: 5,
    height: "61%",
    justifyContent: 'center',
  },

});

export default CarouselCardItem;
