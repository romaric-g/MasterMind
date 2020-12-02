import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Models from '../../types/Models';

interface Props {
    color: Models.Color,
    children?: JSX.Element
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#313131",
        height: 53,
        width: 53,
        borderRadius: 50,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    point: {
        shadowOffset: { height: 4, width: 0},
        shadowColor: "#000000",
        shadowRadius: 4,
        shadowOpacity: 0.5,
        borderRadius: 50,
        elevation: 3,
        overflow: 'hidden',
        width: 27,
        height: 27,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default function Point({children, color}: Props) {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Button Linear Gradient
                colors={[color.from, color.to]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.point} 
            >
                {children}
            </LinearGradient>
        </View>
    )
}