import * as React from "react"
import { View } from "react-native";
import Svg, {Path, G, Defs, ClipPath} from "react-native-svg"



const GradesIcon = (props:any) => {
    return(
    <View style={props.style}>
        <Svg
    width={'100%'}
    height={'100%'}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke={props.tint}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11 13.75A6.417 6.417 0 1 0 11 .916a6.417 6.417 0 0 0 0 12.834Z" />
      <Path d="m7.526 12.732-1.11 8.351L11 18.333l4.583 2.75-1.109-8.36" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
      </View>
      );
}

export default GradesIcon