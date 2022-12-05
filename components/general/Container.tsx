import React from "react";
import { navbarHeight } from "../CustomNavbar";
import { View, ViewStyle, Dimensions, ScrollView} from "react-native";

interface ContainerProps {
	children?: React.ReactNode,
	style?: ViewStyle,
}

export default function Container(props:ContainerProps){
	return (
		<View style={[{ height: Dimensions.get("screen").height - navbarHeight, backgroundColor: "#f4f4f4" }, props.style]}>
			{props.children}
		</View>
	);
}