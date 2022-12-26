import React, { useState, useMemo, useRef, useCallback } from "react";
import { Colors } from "../../declarations/colors";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

interface ProfileBoxProps {
	firstName: string,
	lastName: string,
	class: string
}

export default function ProfileBox(props: ProfileBoxProps) {
	const testData = [{
		firstName: props.firstName,
		lastName: props.lastName,
		class: props.class
	}, {
		firstName: 'Další',
		lastName: 'Účet',
		class: 'G2'
	}];
	
	const [open, setOpen] = useState(false);

	const modal = useRef<BottomSheetModal>(null);
	const snapPoints = useMemo(() => [140 + (60 * testData.length)], []);

	function toggleModal() {
		open ? modal.current?.close() : modal.current?.present();
		open && setOpen(false);
	}

	function backdrop(props: any) {
		return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />;
	}

	const [selected, setSelected] = useState(0);

	function renderAccount(account: ProfileBoxProps, index: number) {
		return (
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
		);
	}

	function separator() {
		return <View style={styles.separator}></View>;
	}
	
	return (
		<View>
			<TouchableOpacity style={styles.profileBox} activeOpacity={0.7} onPress={toggleModal}>
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

			<BottomSheetModal
				ref={modal}
				snapPoints={snapPoints}
				backgroundStyle={styles.modal}
				handleIndicatorStyle={styles.modalHandle}
				backdropComponent={backdrop}>

				<View style={styles.modalContainer}>
					<Text style={styles.modalTitle}>Změna účtu</Text>

					<FlatList
						data={testData}
						renderItem={({ item, index }) => renderAccount(item, index)}
						ItemSeparatorComponent={separator}
						style={styles.accounts}
						scrollEnabled={false}
					/>
				</View>
			</BottomSheetModal>
		</View>
	);
}

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
		backgroundColor: 'whitesmoke'
	},
	separator: {
		marginVertical: 5,
		height: 1,
		opacity: 0.5
	}
});