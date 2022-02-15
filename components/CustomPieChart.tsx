import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { G, Circle } from "react-native-svg";

interface DonutProps {
    attended:number,
    missed:number,
    notExcused:number
}

export default function DonutChart(props:DonutProps) {
    const radius = 70;
    const circleLenght = 2 * Math.PI * radius;
  
    const attended = props.attended;
    const missed = props.missed;
    const notExcused = props.notExcused;
    const total = attended + missed + notExcused;
  
    const attendedPercentage = (attended / total) * 100;
    const missedPercentage = (missed / total) * 100;
    const notExcusedPercentage = (notExcused / total) * 100;
  
    const attendedStroke =
      circleLenght - (circleLenght * attendedPercentage) / 100;
    const missedStroke =
      circleLenght - (circleLenght * missedPercentage) / 100;
    const notExcusedStroke =
      circleLenght - (circleLenght * notExcusedPercentage) / 100;
  
    const groceriesAngle = (attended / total) * 360;
    const billsAngle = (missed / total) * 360;
    const regularAngle = groceriesAngle + billsAngle;
  return (
    <View style={styles.container}>
         <Svg height="100%" width="100%" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            { total === 0 ? (
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#F1F6F9"
                fill="transparent"
                strokeWidth="40"
              />
             ) : (
               <>
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#DE6830"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleLenght}
                  strokeDashoffset={attendedStroke}
                  rotation={0}
                  originX="90"
                  originY="90"
                  strokeLinecap="butt"
                 />
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#1E9EE8"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleLenght}
                  strokeDashoffset={missedStroke}
                  rotation={groceriesAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="butt"
                 />
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#39E81E"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleLenght}
                  strokeDashoffset={notExcusedStroke}
                  rotation={regularAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="butt"
                />
               </>
             )
            }
          </G>
        </Svg>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    color: "red",
    height: "100%",
    width: "100%",
    }
  })