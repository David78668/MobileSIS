import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';
import Modal from '../general/Modal';
import { ThemeContext } from "../../App";
import GetColors from "../../declarations/colors";

interface ProfileBoxProps {
	firstName: string,
	lastName: string,
	class: string
}

export default function ProfileBox(props: ProfileBoxProps) {
	const context = React.useContext(ThemeContext);
	let Colors = GetColors(true);
	if (context) {
		Colors = GetColors(context?.value);
	}
	const testData = [{
		firstName: props.firstName,
		lastName: props.lastName,
		class: props.class
	}, {
		firstName: 'Další',
		lastName: 'Účet',
		class: 'G2'
	}];
	
	const [selected, setSelected] = useState(0);

	function renderAccount(account: ProfileBoxProps, index: number) {
		return (
			<View style={styles.shadow}>
				<View style={styles.inner}>
					<TouchableOpacity
						style={[styles.account, index == selected && styles.selected]}
						activeOpacity={index == selected ? 1 : 0.7}
						onPress={() => setSelected(index)}>
						
						<View style={styles.header}>
							<View style={[styles.profilePicture, { width: 40, height: 40 }]}>
								<Text style={[styles.profilePictureText, { fontSize: 16 }]}>{account.firstName[0]}{account.lastName[0]}</Text>
							</View>
							
							<View style={{ marginLeft: 15 }}>
								<Text style={[styles.studentName, { fontSize: 16 }]}>{account.firstName} {account.lastName}</Text>
								<Text style={[styles.studentInfo, { fontSize: 13 }]}>Třída {account.class}</Text>
							</View>
						</View>

						{index == selected && <Feather name='check' color={Colors.TertiaryBackgroundColor} size={25} />}
						</TouchableOpacity>
					</View>
			</View>
		);
	}

	function separator() {
		return <View style={{  height: 10 }}></View>;
	}

	const [open, setOpen] = useState(false);
	const snapPoints = useMemo(() => [24 + 60 + 22 + 30 + (testData.length * 60) + ((testData.length - 1) * 10)], []);
	const styles = StyleSheet.create({
		profileBox: {
			backgroundColor: Colors.PrimaryBackgroundColor,
			alignItems: 'center',
			flexDirection: 'row',
			justifyContent: 'space-between',
			borderRadius: 20,
			width: Dimensions.get('window').width - 40,
			alignSelf: 'center',
			paddingVertical: 10,
			paddingHorizontal: 20
		},
		profilePicture: {
			height: 50,
			width: 50,
			borderRadius: 50,
			backgroundColor: '#E9671E33',
			justifyContent: 'center',
			alignItems: 'center'
		},
		profilePictureText: {
			fontSize: 18,
			fontWeight: 'bold',
			color: Colors.TertiaryBackgroundColor
		},
		header: {
			flexDirection: 'row',
			alignItems: 'center'
		},
		studentName: {
			fontSize: 18,
			fontWeight: 'bold',
			opacity: 0.8,
			color: Colors.SecondaryTextColor,
		},
		logoutText: {
			color: Colors.PrimaryTextColor,
			fontSize: 12
		},
		studentInfo: {
			color: Colors.SecondaryTextColor,
			opacity: 0.6,
			fontWeight: '500'
		},
		logoutButton: {
			backgroundColor: Colors.TertiaryBackgroundColor,
			borderRadius: 10,
			height: 33,
			width: 117,
			alignItems: 'center',
			justifyContent: 'center'
		},
		modal: {
			backgroundColor: Colors.SecondaryBackgroundColor,
			borderRadius: 20
		},
		modalHandle: {
			backgroundColor: 'lightgray',
			width: 50
		},
		modalContainer: {
			paddingHorizontal: 20,
			paddingVertical: 10,
			alignItems: 'center'
		},
		modalTitle: {
			color: Colors.PrimaryTextColor,
			fontSize: 18,
			fontWeight: 'bold',
			opacity: 0.8
		},
		accounts: {
			marginTop: 30,
			width: '100%'
		},
		account: {
			justifyContent: 'space-between',
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 10,
			paddingHorizontal: 20,
			borderRadius: 20
		},
		selected: {
			backgroundColor: 'white'
		},
		inner: {
			borderRadius: 10,
			backgroundColor: Colors.PrimaryBackgroundColor,
			overflow: 'hidden'
		},
		shadow: {
			shadowColor: 'rgba(0, 0, 0, 0.05)',
			shadowOffset: { width: 0, height: 0 },
			shadowOpacity: 1,
			shadowRadius: 10
		},
		accountList: {
			overflow: 'visible'
		}
	});
	return (
		<View>
			<TouchableOpacity style={styles.profileBox} activeOpacity={0.7} onPress={() => setOpen(true)}>
				<View style={styles.header}>
					<View style={styles.profilePicture}>
						<Text style={styles.profilePictureText}>{props.firstName[0]}{props.lastName[0]}</Text>
					</View>
					
					<View style={{ marginLeft: 15 }}>
						<Text style={styles.studentName}>{props.firstName} {props.lastName}</Text>
						<Text style={styles.studentInfo}>Třída {props.class}</Text>
					</View>
				</View>

				<Feather name='chevron-down' color={Colors.TertiaryBackgroundColor} size={25} />
			</TouchableOpacity>

			<Modal
				title='Změna účtu'
				snapPoints={snapPoints}
				open={open} setOpen={setOpen}>

                <FlatList
                    data={testData}
                    renderItem={({ item, index }) => renderAccount(item, index)}
                    ItemSeparatorComponent={separator}
					scrollEnabled={false}
					style={styles.accountList} />
			</Modal>
		</View>
	);
}