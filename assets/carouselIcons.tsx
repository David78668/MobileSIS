import * as React from "react"
import { View } from "react-native";
import {Svg, Path, Ellipse } from "react-native-svg"

// *NOTES*

/*viewBox has to be the same dimensions as the original SVG,
else the resizing will be broken*/

/*It is in your best interest to wrap the SVG in a wrapper view,
with the SVG height and width set to 100%, this will make it easier to style*/

/*As of writing this, RN does not directly support SVG files on mobile,
this project uses the react-native-svg library,
which has a slightly different format from standard SVG*/

// *CONVERSION STEPS*
// 1. SVG to SVGR Converter => https://react-svgr.com/playground/
// 2. Import the required components
// 3. Replace the standard SVG elements with react components by capitalizing the first letter
// 4. add the viewBox propery with the value of "0 0 <height> <width>"
// 5. give height and width the value of 100% respectively
// 6. wrap the <Svg> component in a <View>

interface iconProps {
    style?: object,
}

export const RoomIcon = (props: iconProps) => {
    return (
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

export const TeacherIcon = (props: iconProps) => {
    return (
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