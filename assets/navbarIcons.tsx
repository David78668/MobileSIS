import * as React from "react"
import { View } from "react-native";
import {Svg, Path, G, ClipPath, Defs } from "react-native-svg"

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

// *ADDITIONAL INFO*
// Tint is used to dynamically change the colour of our SVG when selected
// The stroke property is used to change the colour of our path lines

interface iconProps {
    style?: object,
    tint?: string
}

export const AbsenceIcon = (props: iconProps) => {
    return (
        <View style={props.style}>
            <Svg
                height={'100%'} width={'100%'}
                viewBox="0 0 22 22" 
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

export const GradesIcon = (props: iconProps) => {
    return (
        <View style={props.style}>
            <Svg
                width='100%'
                height='100%'
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

export const HomeIcon = (props: iconProps) => {
    return (
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

export const ScheduleIcon = (props: iconProps) => {
    return (
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

export const ProfileIcon = (props: any) => {
    return (
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