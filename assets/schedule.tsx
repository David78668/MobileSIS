import * as React from "react"
import { View } from "react-native";
import Svg, {Path} from "react-native-svg"



const ScheduleIcon = (props:any) => {
    return(
    <View style={props.style}>
        <Svg
    width="100%"
    height="100%"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM14 1v4M6 1v4M1 9h18"
      stroke={props.tint}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
      </View>
      );
}

export default ScheduleIcon