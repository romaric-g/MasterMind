import React from 'react';
import { StyleSheet, View } from 'react-native';
import COLORS from '../../const';
import Misc from '../../types/Misc';
import Point from '../Point';
import PointInfo from '../PointInfo';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A1A",
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 100,
        maxWidth: 400
    },
    pointContainer: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
    }
});

interface Props {
    seq: number[],
    feedbacks: Misc.Feedback[]
}

export default function PointRowHard({ seq, feedbacks }: Props) {
    return (
        <View
            style={styles.container}
        >
            { seq.map((colorID, index) =>
                <View style={styles.pointContainer} key={index}>
                    <Point color={COLORS[colorID]} />
                    <PointInfo type={feedbacks[index]} />
                </View>
            )}
        </View>
    )
}