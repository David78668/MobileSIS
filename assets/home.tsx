import * as React from "react"
import { View } from "react-native";
import Svg, {Path} from "react-native-svg"



const HomeIcon = (props:any) => {
    return(
    <View style={props.style}>
        <Svg
    width='100%'
    height='100%'
    viewBox="0 0 21 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m1.957 8.178 9-7 9 7v11a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-11Z"
      stroke={props.tint}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.957 21.178v-10h6v10"
      stroke={props.tint}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
      </View>
      );
}

export default HomeIcon