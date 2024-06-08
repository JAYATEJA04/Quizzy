const Questions = [
  {
    number: 1,
    question: 'If I want to write a sentence, which component should I use.',
    options: [
      {option_a: '<p> p tag </p>', isItTrue: false},
      {option_b: '<b> b tag </b>', isItTrue: false},
      {option_c: '<i> i tag </i>', isItTrue: false},
      {option_d: '<Text> Text tag </Text>', isItTrue: true},
    ],
    correctOption: '<Text> Text tag </Text>',
  },
  {
    number: 2,
    question:
      'Which of the following components is the optimized way to show a long list of data?',
    options: ['View', 'ScrollView', 'SafeAreaView', 'FlatList'],
    correctOption: 'View',
  },
  {
    number: 3,
    question: 'How do you style your React Native component?',
    options: [
      'Stylesheet.create',
      'Stylesheet.css',
      'SafeAreaView',
      'FlatList',
    ],
    correctOption: 'Stylesheet.create',
  },
  {
    number: 4,
    question:
      'Which of the following is the correct plugin to navigate from one screen to another?',
    options: ['React Hooks', 'React Navigation', 'React Router', 'Screen'],
    correctOption: 'React Navigation',
  },
  {
    number: 5,
    question: 'Which of the following is the correct way to render a webpage.',
    options: [
      'React Native webview',
      'React Native HTML',
      'View',
      'ScrollView',
    ],
    correctOption: 'View',
  },
  {
    number: 6,
    question:
      'Which of the following is the correct method(hook) to make an api call on page load?',
    options: ['useState', 'useEffect', 'useReducer', 'useSelector'],
    correctOption: 'useEffect',
  },
  {
    number: 7,
    question:
      "Which of the following is used to make sure that your input fields don't hide behind the keyboard?",
    options: ['KeyboardAvoidingView', 'KeyboardView', 'View', 'Scrollview'],
    correctOption: 'KeyBoardAvoidingView',
  },
  {
    number: 8,
    question: 'What is the use case of ActivityIndicator in React Native?',
    options: [
      'To display a circular loading activity',
      'To display a progress bar activity',
      'To open the app',
      'To exit the app',
    ],
    correctOption: 'To display a progress bar activity',
  },
  {
    number: 9,
    question: 'How do we detect platforms in React Native?',
    options: ['Platform.OS', 'Phone.OS', 'Dimension.OS', 'RN.OS'],
    correctOption: 'Platform.OS',
  },
  {
    number: 10,
    question:
      'Which of the following is the correct way to store data in a local device?',
    options: [
      'Async storage',
      'Local storage',
      'Session storage',
      'RN Storage',
    ],
    correctOption: 'Localstorage',
  },
];

export default Questions;
