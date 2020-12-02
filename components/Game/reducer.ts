import React from 'react';
import Misc from '../../types/Misc';
import getRandomColorsSerie from '../../utils/getRandomColorsSerie';

interface ReducerAction {
  type: 'add',
  seq: number[],
}

type SeqHistoryState = {
  colors: number[],
  history: number[][],
  feedbacks: Misc.Feedback[][]
};

type SeqHistoryReducer = React.Reducer<SeqHistoryState, ReducerAction>;

const seqHistoryReducer: SeqHistoryReducer = (prevState, { type, seq }) => {
  switch (type) {
    case 'add':
      return {
        ...prevState,
        history: [...prevState.history, seq],
        feedbacks: [...prevState.feedbacks, getFeedback(prevState.colors, seq)]
      };
    default:
      throw new Error('Unhandled action type');
  }
};

const getFeedback = (colors: number[], seq: number[]) => {
  return seq.map((colorID, index) : Misc.Feedback => {
    if (colors[index] === colorID) {
      return "valide";
    }
    if (colors.includes(colorID)) {
      return "present"; 
    }
    return "absent"
  })
}

export default seqHistoryReducer;