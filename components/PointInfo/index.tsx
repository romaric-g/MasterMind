import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import Misc from '../../types/Misc';

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: -30,
        backgroundColor: "#313131",
        height: 30,
        width: 30,
        borderRadius: 50,
        borderColor: "#1A1A1A",
        borderStyle: "solid",
        borderWidth: 6,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    point: {
        shadowOffset: { height: 4, width: 0},
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 0.5,
        borderRadius: 50,
        overflow: 'hidden',
        width: 10,
        height: 10,
    }
});

interface Props {
    type: Misc.Feedback
}

export default function PointInfo(props: Props) {

    const colors = React.useMemo(() => {
        if (props.type === 'absent') {
            return ['#FD0000', '#FCA7A7'];
        }
        if (props.type === 'present') {
            return ['#FD5B00', '#FCC5A7'];
        }
        return ['#05FD00', '#A7FCAF'];
    }, [])

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={colors}
                start={{ x: 1, y: 0 }}
                style={styles.point} >
            </LinearGradient>
        </View>
    )
}