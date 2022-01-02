import * as React from "react"
import { View } from "react-native";
import Svg, {Path} from "react-native-svg"



const ProfileIcon = (props:any) => {
    return(
    <View style={props.style}>
    <Svg
    width='100%'
    height='100%'
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.667 22.75v-2.167a4.334 4.334 0 0 0-4.334-4.333H8.667a4.333 4.333 0 0 0-4.334 4.333v2.167M13 11.917a4.333 4.333 0 1 0 0-8.667 4.333 4.333 0 0 0 0 8.667Z"
      stroke={props.tint}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
      </View>
      );
}

export default ProfileIcon
