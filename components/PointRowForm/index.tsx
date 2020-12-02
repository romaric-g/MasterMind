import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import PointInput from './PointInput';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    pointsContainer: {
        backgroundColor: "#1A1A1A",
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 100,
        maxWidth: 400
    },
    pointContainer: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    gradient: {
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 50,
        paddingHorizontal: 70,
        paddingVertical: 10,
    },
    text: {
        color: "white",
        textTransform: "uppercase",
        fontWeight: "800"
    },
    icon: {
        width: "60%",
        height: "60%",
    }
});

interface Props {
    addTryHistory: (seq: number[]) => void
}

export default function PointRowInput({ addTryHistory }: Props) {

    const [ editing, setEditing ] = React.useState<number | null>(null);
    const [ seq, setSeq ] = React.useState<number[]>([0,0,0,0]);

    const setSelectedColor = React.useCallback((index, colorID: number) => {
        const newSeq = seq;
        newSeq[index] = colorID;
        setSeq(newSeq);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.pointsContainer}>
                {seq.map((colorID, index) => (
                    <PointInput 
                        key={index}
                        id={index}
                        selectedColor={seq[index]}
                        setSelectedColor={(newColorID) => setSelectedColor(index, newColorID)}
                        isEdit={index === editing}
                        setEdit={setEditing}
                    />
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => addTryHistory(seq)}>
                    <LinearGradient colors={['#FC2A76', '#8D2B2B']} style={styles.gradient}>
                        <Text style={styles.text}>Valider</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}