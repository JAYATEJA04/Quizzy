import React, {useReducer} from 'react';

export const initialState = {
  questionCount: 0,
  result: false,
  optionSelected: null,
  disableOption: false,
  isQuizInProgress: true,
};

export function QuizScreenReducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        optionSelected: action.payload,
        result: !state.result,
        disableOption: !state.disableOption,
      };
    case 'CONTINUE':
      return {
        ...state,
        questionCount: state.questionCount + 1,
        optionSelected: null,
        result: false,
        disableOption: false,
      };
    case 'FINISH':
      return {
        ...initialState,
        questionCount: 0,
        quizInProgress: false,
      };
    case 'GOING_BACK':
      return {
        ...state,
        questionCount: 0,
      };
    default:
      return state;
  }
}
