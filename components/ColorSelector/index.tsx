import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import COLORS from '../../const';

interface Props {
    setSelectedColor: (index: number) => void 
}

export default function ColorSelector({ setSelectedColor }: Props) {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            elevation: 3,
            borderRadius: 50,
        },
        pointContainer: {
            paddingVertical: 12,
            paddingHorizontal: 4,
        },
        point: {
            marginHorizontal: 5,
            shadowOffset: { height: 4, width: 0},
            shadowColor: "#000000",
            shadowRadius: 4,
            shadowOpacity: 0.5,
            borderRadius: 50,
            elevation: 3,
            overflow: 'hidden',
            width: 23,
            height: 23
        }
    });

    return (
        <View style={styles.container}>
            { COLORS.map((color, index) => (
                <TouchableOpacity
                    onPress={() => setSelectedColor(index)}
                    style={styles.pointContainer}
                    key={index}
                >
                    <LinearGradient
                        colors={[color.from, color.to]}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        style={styles.point} 
                    />
                </TouchableOpacity>

            ))}
        </View>
    )
}