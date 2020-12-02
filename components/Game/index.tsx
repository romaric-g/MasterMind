import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import getRandomColorsSerie from '../../utils/getRandomColorsSerie';
import Menu from '../Menu';
import PointRow from '../PointRow';
import PointRowInput from '../PointRowForm';
import seqHistoryReducer from './reducer';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
        width: "100%",
    },
});

export default function Game() {

    const [ seqHistory, setSeqHistory ] = React.useReducer(seqHistoryReducer, {
        colors: getRandomColorsSerie(),
        history: [],
        feedbacks: []
      });

    const addTryHistory = React.useCallback((seq: number[]) => {
        setSeqHistory({ type: "add", seq: [...seq] })
    }, [])

    console.log("SEPARATOR");
    console.log(seqHistory);

    return (
       <View style={styles.container} >
           <Menu />
           <ScrollView style={{ flexGrow: 1, flexShrink: 1 }}>
                {
                    seqHistory.history.map((seq, index) => <PointRow key={index} seq={seq} feedbacks={seqHistory.feedbacks[index]} />)
                }
            </ScrollView>
            <PointRowInput addTryHistory={addTryHistory} />
       </View> 
    )
}