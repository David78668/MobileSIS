import React, { Dispatch, useRef, SetStateAction } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { Colors } from "../../declarations/colors";

interface ModalProps {
	title: string,
    snapPoints: number[] | string[],
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    children?: React.ReactNode
}

export default function Modal(props: ModalProps) {
    function backdrop(props: any) {
        return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />;
    }

    const modal = useRef<BottomSheetModal>(null);

    props.open ? modal.current?.present() : modal.current?.close();
    props.open && props.setOpen(false);
    
	return (
		<BottomSheetModal
            ref={modal}
            snapPoints={props.snapPoints}
            backgroundStyle={styles.modal}
            handleIndicatorStyle={styles.modalHandle}
            backdropComponent={backdrop}>

            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>{props.title}</Text>

                <View style={styles.children}>{props.children}</View>
            </View>
        </BottomSheetModal>
	);
}

const styles = StyleSheet.create({
	modal: {
        borderRadius: 20,
        backgroundColor: Colors.SecondaryBackgroundColor
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
    children: {
        marginTop: 30,
        width: '100%'
    }
});