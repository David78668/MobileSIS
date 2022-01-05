import * as React from "react"
import { View } from "react-native";
import Svg, {Path} from "react-native-svg"



const TeacherIcon = (props:any) => {
    return(
    <View style={props.style}>
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.75 0C3.507 0 .768 2.747.768 6s2.74 6 5.982 6c3.243 0 5.982-2.747 5.982-6S9.992 0 6.75 0Zm0 3c1.033 0 1.795.763 1.795 1.8S7.783 6.6 6.75 6.6c-1.032 0-1.795-.763-1.795-1.8S5.718 3 6.75 3ZM3.696 8.863a2.964 2.964 0 0 1 2.456-1.32h1.196c1.026 0 1.92.528 2.456 1.32A4.163 4.163 0 0 1 6.75 10.2a4.163 4.163 0 0 1-3.054-1.337Z"
      fill="#E9671E"
    />
  </Svg>
      </View>
      );
}

export default TeacherIcon
