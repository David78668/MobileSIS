import React from "react";
import { navbarHeight } from "./CustomNavbar";
import { View, ViewStyle, Dimensions} from "react-native";

interface ContainerProps {
	children?: React.ReactNode,
	style?: ViewStyle,
}

export default function Container(props:ContainerProps){
	return(
		<View style={[{flex:1, maxHeight: Dimensions.get('window').height}, props.style]}>
			{props.children}
		</View>
	);

}