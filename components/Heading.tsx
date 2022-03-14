import React from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, ViewStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface HeadingProps {
	headerText: string,
	iconName?: string,
	children?: React.ReactNode,
	style?: ViewStyle,
}

export default function Heading(props: HeadingProps) {
	return(
		<ImageBackground source={require('../assets/carousel.png')} resizeMode="cover" style={styles.container}>
			<View style={styles.headerContainer}>
            	<Text style={styles.headerText}>{props.headerText}</Text>
				{props.iconName && <Ionicons name='settings-sharp' style={styles.icon} size={34}/>}
        	</View>
			<View style={props.style}>
				{props.children}
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container:{
		minWidth:'100%',
		alignItems:'center',
		paddingTop:35,
	},
	headerText:{
		fontSize:30,
		color:'white',
		fontWeight:'bold',
	  },
	  headerContainer:{
		paddingBottom:'4%',
		flexDirection:'row',
		justifyContent:'space-between',
		width:'88%',
	  },
	  icon:{
		color:'white',
	  },
})