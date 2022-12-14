import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

interface ProfilData {
    key: string,
    value: string,
    editable?: boolean
}

interface ProfilProps {
    data: Array<ProfilData>,
    edit?: boolean
}

export default function ProfileInfo(props: ProfilProps) {
    const [telephone, setTelephone] = useState('123456789');

	function renderInfo({ item }: { item: ProfilData }) {
        return (
            <View style={styles.item}>
                <View style={styles.wrapper}>
                    <Text style={styles.key}>{item.key}</Text>
                </View>
                
                {props.edit && item.editable ?
                    <TextInput
                        style={styles.input}
                        value={telephone}
                        onChangeText={setTelephone}
                        keyboardType='phone-pad'
                        maxLength={9}
                    /> :
                    <View style={styles.wrapper}>
                        <Text style={styles.value}>{item.value}</Text>
                    </View>}
            </View>
        );				
    }
    
    return (
		<View style={styles.container}>
			<FlatList
				data={props.data}
				renderItem={renderInfo}
                ItemSeparatorComponent={separator}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

function separator() {
	return <View style={styles.separator}></View>;
}

 const styles = StyleSheet.create({
	item: {
         flexDirection: 'row',
        justifyContent: 'space-between',
		paddingVertical: 10
	},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	key: {
		fontWeight: 'bold',
		opacity: 0.8
	},
	value: {
		opacity: 0.6,
		fontWeight: '500'
	},
	separator: {
		backgroundColor: 'lightgray',
		opacity: 0.5,
		width: '100%',
		borderRadius: 1,
		height: 1
	},
	container: {
		marginTop: 20,
		backgroundColor: 'white',
		marginHorizontal: 20,
		paddingHorizontal: 20,
		borderRadius: 10,
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 10,
		shadowOpacity: 1,
		overflow: 'visible'
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
});