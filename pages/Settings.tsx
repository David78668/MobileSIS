import { useState } from 'react';
import { StyleSheet, Switch, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Body from '../components/general/Body';
import Container from '../components/general/Container';
import Heading from '../components/general/Heading';
import { Colors } from '../declarations/colors';
import * as Linking from 'expo-linking';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
    const [enabled, setEnabled] = useState(false);

    const sites = [{
        name: 'Web',
        username: 'www.kyberna.cz',
        link: 'https://kyberna.cz/'
    }, {
        name: 'Instagram',
        username: '@kyberna.cz',
        link: 'instagram://user?username=kyberna.cz'
    }, {
        name: 'Facebook',
        username: '@kyberna',
        link: 'fb://profile/100063567971513'
    }];
    
    const contact = [{
        name: 'E-mail',
        username: 'info@ssakhk.cz',
        link: 'mailto:info@ssakhk.cz'
    }, {
        name: 'Telefon',
        username: '+420 495 518 777',
        link: 'tel:+420 495 518 777'
    }];
    
    function separator() {
        return <View style={styles.separator}></View>;
    }

    function renderSite({ item }: any) {
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => Linking.openURL(item.link)}>
                <View style={styles.wrapper}>
                    <Text style={styles.key}>{item.name}</Text>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.value}>{item.username}</Text>
                    <Ionicons name='open-outline' style={styles.siteIcon} />
                </View>
            </TouchableOpacity>
        );
    }

	return (
		<Container>
			<Heading title='Nastavení' />
			
			<Body>
                <View style={styles.section}>
					<View style={styles.header}>
						<View style={styles.headerBox}>
							<Text style={styles.title}>Aplikace</Text>
						</View>

                    </View>
                    
                    <View style={styles.container}>
                        <View style={styles.item}>
                            <View style={styles.wrapper}>
                                <Text style={styles.key}>Dark mode</Text>
                            </View>

                            <View style={styles.wrapper}>
                                <Switch
                                    trackColor={{ true: Colors.TertiaryBackgroundColor }}
                                    onValueChange={() => setEnabled(!enabled)}
                                    value={enabled} />
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={styles.section}>
					<View style={styles.header}>
						<View style={styles.headerBox}>
							<Text style={styles.title}>Sociální sítě</Text>
						</View>
                    </View>
                    
                    <View style={styles.container}>
                        <FlatList
                            data={sites}
                            renderItem={renderSite}
                            ItemSeparatorComponent={separator}
                            style={styles.sitesList}    
                            />
                    </View>
                </View>
                
                <View style={styles.section}>
					<View style={styles.header}>
						<View style={styles.headerBox}>
							<Text style={styles.title}>Kontakt školy</Text>
						</View>
                    </View>
                    
                    <View style={styles.container}>
                        <FlatList
                            data={contact}
                            renderItem={renderSite}
                            ItemSeparatorComponent={separator}
                            style={styles.sitesList}    
                            />
                    </View>
				</View>
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({
	section: {
		marginVertical: 20
    },
    header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
    },
    headerBox: {
		flexDirection: 'row',
		alignItems: 'center'
    },
    title: {
		fontWeight: 'bold',
		fontSize: 18,
		marginLeft: 20,
		opacity: 0.8
    },
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
		color: Colors.SecondaryTextColor,
		opacity: 0.6
	},
	value: {
		opacity: 0.6,
		color: Colors.SecondaryTextColor,
		fontWeight: '500'
    },
    container: {
		marginTop: 20,
		backgroundColor: Colors.PrimaryBackgroundColor,
		marginHorizontal: 20,
		paddingHorizontal: 20,
		borderRadius: 10,
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 10,
		shadowOpacity: 1,
		overflow: 'visible'
    },
    separator: {
		backgroundColor: Colors.TertiaryTextColor,
		opacity: 0.5,
		width: '100%',
		borderRadius: 1,
		height: 1
    },
    sitesList: {
        overflow: 'visible'
    },
    siteIcon: {
        marginLeft: 5,
        opacity: 0.5
    }
});