import * as React from "react"
import { View } from "react-native";
import Svg, {Path} from "react-native-svg"



const AbsenceIcon = (props:any) => {
    return(
    <View style={props.style}>
    <Svg
        height={'100%'} width={'100%'} 
        viewBox="0 0 22 22" // The viewBox has to be the same dimensions as the original svgs, otherwise resizing won't work
        fill='none'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
        
          d="M20.167 10.157V11a9.167 9.167 0 1 1-5.436-8.378"
          stroke={props.tint}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
        
          d="M20.167 3.667 11 12.842l-2.75-2.75"
          stroke={props.tint}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
      </View>
      );
}

export default AbsenceIcon