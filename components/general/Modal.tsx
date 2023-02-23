import React, { Dispatch, useRef, SetStateAction } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import GetColors from "../../declarations/colors";
import { useTheme } from "../../context/ThemeProvider";

interface ModalProps {
	title: string,
    snapPoints: number[] | string[],
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    children?: React.ReactNode
}

export default function Modal(props: ModalProps) {
    // color mode
	const mode = useTheme();
    const Colors = GetColors(mode.value);
    
    function backdrop(props: any) {
        return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />;
    }

    const modal = useRef<BottomSheetModal>(null);

    props.open ? modal.current?.present() : modal.current?.close();
    props.open && props.setOpen(false);
    
    const styles = StyleSheet.create({
        modal: {
            borderRadius: 20,
            backgroundColor: Colors.SecondaryBackgroundColor
        },
        modalHandle: {
            backgroundColor: Colors.TertiaryTextColor,
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
            color: Colors.SecondaryTextColor,
            opacity: 0.8
        },
        children: {
            marginTop: 30,
            width: '100%'
        }
    });
    
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