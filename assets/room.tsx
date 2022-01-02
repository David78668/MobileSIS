import * as React from "react"
import { View } from "react-native";
import Svg, {Path, Ellipse} from "react-native-svg"



const RoomIcon = (props:any) => {
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
    <Ellipse cx={6.75} cy={6} rx={5.982} ry={6} fill="#E9671E" />
    <Path
      d="M6.55 3.8a.595.595 0 0 0-.479.241.897.897 0 0 1-1.606-.414.902.902 0 0 1 .171-.667 2.393 2.393 0 0 1 2.671-.837 2.393 2.393 0 0 1 1.636 2.278v4.8a.801.801 0 0 1-.798.799h-3.19a.796.796 0 0 1-.797-.8V5.8a.801.801 0 0 1 .797-.8H6.55a.597.597 0 0 0 .599-.6.6.6 0 0 0-.599-.6Zm-.897 4.4a.299.299 0 0 0-.299.3.3.3 0 0 0 .3.3h1.794a.299.299 0 0 0 .299-.3.3.3 0 0 0-.3-.3H5.654Z"
      fill="#fff"
    />
  </Svg>
      </View>
      );
}

export default RoomIcon