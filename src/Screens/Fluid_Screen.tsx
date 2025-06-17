import React, {useEffect, useReducer} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  decrement,
  increment,
} from '../../redux store/features/progressBarSlice';
import {useNavigation} from '@react-navigation/native';
import {
  clearSelectedOptions,
  storeSelectedOption,
} from '../api/FluidScreen_API';
import QuizScreen from '../Components/QuizScreen';
import {QuizScreenReducer, initialState} from '../Components/QuizScreenState';

const Fluid_Screen = ({route}) => {
  const {quizQuestions, QuizTitle, QuizLevel, baseUrl} = route.params;
  const [state, dispatchLocal] = useReducer(QuizScreenReducer, initialState);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (!state.isQuizInProgress) {
      return;
    }

    const unsubscribe = navigation.addListener('beforeRemove', e => {
      const action = e.data.action;

      const handleGoingBack = async () => {
        dispatchLocal({type: 'GOING_BACK'});
        dispatch(decrement());
        await clearSelectedOptions(baseUrl, QuizTitle);
        unsubscribe();
        navigation.dispatch(action);
      };

      e.preventDefault();

      Alert.alert(
        'Quit Quiz?',
        'Are you sure you want to quit the quiz? It will clear all the progress.',
        [
          {text: "Don't leave", style: 'cancel', onPress: () => {}},
          {
            text: 'Leave',
            style: 'destructive',
            onPress: () => handleGoingBack(),
          },
        ],
      );
    });

    return () => {
      unsubscribe();
    };
  }, [
    QuizTitle,
    baseUrl,
    dispatch,
    state.isQuizInProgress,
    navigation,
    state.questionCount,
  ]);

  const handleOptionSelected = async option => {
    console.log('hi', option);
    dispatchLocal({type: 'SELECT_OPTION', payload: option.optionId});

    await storeSelectedOption(
      option,
      baseUrl,
      QuizTitle,
      QuizLevel,
      state.questionCount,
      quizQuestions,
    );
  };

  const handleContinueButton = () => {
    if (state.questionCount < quizQuestions.length - 1) {
      dispatchLocal({type: 'CONTINUE'});
      dispatch(increment());
    } else {
      dispatchLocal({type: 'FINISH'});
      dispatch(decrement());
      navigation.navigate('Dashboard');
    }
  };

  const correctAnswer = quizQuestions[state.questionCount].correctAnswer;
  const explanation = quizQuestions[state.questionCount].explanation;
  const referenceLink = quizQuestions[state.questionCount].referenceLink;
  console.log('privyet', state.disableOption);

  return (
    <QuizScreen
      QuizTitle={QuizTitle}
      questionCount={state.questionCount}
      quizQuestions={quizQuestions}
      optionSelected={state.optionSelected}
      correctAnswer={correctAnswer}
      handleOptionSelected={handleOptionSelected}
      disableOption={state.disableOption}
      handleContinueButton={handleContinueButton}
      explanation={explanation}
      referenceLink={referenceLink}
      result={state.result}
    />
  );
};

export default Fluid_Screen;
